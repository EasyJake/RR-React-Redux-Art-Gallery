#!/bin/zsh

# Load NVM
export NVM_DIR="$HOME/.nvm"
source $(brew --prefix nvm)/nvm.sh

# Install Node.js LTS version (e.g., 16)
nvm install 16
nvm alias default 16

# Use Node.js LTS version
nvm use 16

# Confirm the Node.js version switched
node -v
