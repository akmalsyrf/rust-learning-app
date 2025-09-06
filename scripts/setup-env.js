#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const environments = ['development', 'preview', 'production'];

function createEnvFile(env) {
  const envContent = `# ${env.charAt(0).toUpperCase() + env.slice(1)} Environment Variables
# Generated on ${new Date().toISOString()}

# Gemini AI API Key
GEMINI_API_KEY=your_gemini_api_key_here

# Environment
NODE_ENV=${env}

# Add other ${env}-specific variables below
`;

  const envPath = path.join(process.cwd(), `.env.${env}`);

  if (!fs.existsSync(envPath)) {
    fs.writeFileSync(envPath, envContent);
    console.log(`✅ Created .env.${env}`);
  } else {
    console.log(`⚠️  .env.${env} already exists, skipping...`);
  }
}

function main() {
  console.log('🚀 Setting up environment files...\n');

  environments.forEach(createEnvFile);

  console.log('\n📝 Next steps:');
  console.log('1. Update the API keys in each .env file');
  console.log('2. Run: npm run secrets:push');
  console.log('\n💡 Tip: Add .env.* to .gitignore to keep secrets safe!');
}

if (require.main === module) {
  main();
}

module.exports = { createEnvFile };
