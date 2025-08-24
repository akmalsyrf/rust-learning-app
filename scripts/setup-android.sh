#!/bin/bash

# Setup script for Android configuration
# This script should be run before building Android app

echo "Setting up Android configuration for production build..."

# Create necessary directories
mkdir -p android/app/src/main/res/xml

# Copy network security config
cp android-config/network_security_config.xml android/app/src/main/res/xml/

# Copy Android manifest template (if needed)
# cp android-config/AndroidManifest.xml android/app/src/main/

echo "Android configuration setup complete!"
echo "You can now run: eas build --platform android --profile production"
