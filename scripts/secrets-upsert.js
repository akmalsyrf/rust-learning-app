#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const environments = ['development', 'preview', 'production'];

function checkEasCli() {
  try {
    execSync('eas --version', { stdio: 'pipe' });
    return true;
  } catch (error) {
    console.error('❌ EAS CLI not found. Please install it first:');
    console.error('   npm install -g eas-cli');
    return false;
  }
}

function checkEnvFile(env) {
  const envPath = path.join(process.cwd(), `.env.${env}`);
  return fs.existsSync(envPath);
}

function pushSecrets(env) {
  const envPath = path.join(process.cwd(), `.env.${env}`);

  if (!checkEnvFile(env)) {
    console.log(`⚠️  .env.${env} not found, skipping...`);
    return false;
  }

  try {
    console.log(`🔄 Pushing secrets to ${env} environment...`);
    execSync(`eas env:push ${env} --path ${envPath}`, {
      stdio: 'inherit',
      cwd: process.cwd(),
    });
    console.log(`✅ Successfully pushed secrets to ${env}`);
    return true;
  } catch (error) {
    console.error(`❌ Failed to push secrets to ${env}:`, error.message);
    return false;
  }
}

function upsertSecrets() {
  console.log('🚀 Starting secrets upsert process...\n');

  if (!checkEasCli()) {
    process.exit(1);
  }

  let successCount = 0;
  let totalCount = 0;

  environments.forEach(env => {
    totalCount++;
    if (pushSecrets(env)) {
      successCount++;
    }
    console.log(''); // Add spacing
  });

  console.log('📊 Summary:');
  console.log(`   ✅ Successful: ${successCount}/${totalCount}`);
  console.log(`   ❌ Failed: ${totalCount - successCount}/${totalCount}`);

  if (successCount === totalCount) {
    console.log('\n🎉 All secrets pushed successfully!');
  } else {
    console.log('\n⚠️  Some secrets failed to push. Please check the errors above.');
    process.exit(1);
  }
}

function main() {
  const args = process.argv.slice(2);

  if (args.includes('--help') || args.includes('-h')) {
    console.log(`
🔐 Secrets Upsert Tool

Usage:
  npm run secrets:upsert              # Push to all environments
  node scripts/secrets-upsert.js     # Direct execution
  node scripts/secrets-upsert.js --help

This tool will:
1. Check if EAS CLI is installed
2. Check for .env files for each environment
3. Push secrets to EAS for each environment
4. Provide a summary of results

Environment files expected:
  - .env.development
  - .env.preview  
  - .env.production
`);
    return;
  }

  upsertSecrets();
}

if (require.main === module) {
  main();
}

module.exports = { upsertSecrets, pushSecrets, checkEasCli };
