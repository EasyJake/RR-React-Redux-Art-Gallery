#!/bin/zsh

# Load NVM
export NVM_DIR="$HOME/.nvm"
source $(brew --prefix nvm)/nvm.sh

# Install the latest Node.js 16.x version
nvm install 16
nvm use 16
nvm alias default 16

# Ensure the proper Node.js version is being used
node -v

# Remove existing node_modules and package-lock.json
rm -rf node_modules package-lock.json

# Install npm dependencies
npm install

# Start the project
npm start
