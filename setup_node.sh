#!/bin/zsh

# Install NVM (Node Version Manager) using Homebrew
brew install nvm

# Create the NVM directory if it doesn't already exist
mkdir -p ~/.nvm

# Add NVM to PATH for scripting
export NVM_DIR="$HOME/.nvm"
[ -s "/usr/local/opt/nvm/nvm.sh" ] && \. "/usr/local/opt/nvm/nvm.sh"
[ -s "/usr/local/opt/nvm/etc/bash_completion.d/nvm" ] && \. "/usr/local/opt/nvm/etc/bash_completion.d/nvm"

# Install the latest Long-Term Support (LTS) version of Node.js
nvm install --lts

# Use the installed Node.js version
nvm use --lts

# Print the version of Node.js to confirm it's correctly installed
node -v

# Check if the .zshrc exists and then append the NVM initialization to it
if [ -f "$HOME/.zshrc" ]; then
    echo 'Exporting NVM paths to .zshrc'
    echo '' >> "$HOME/.zshrc"
    echo '# NVM Configuration' >> "$HOME/.zshrc"
    echo 'export NVM_DIR="$HOME/.nvm"' >> "$HOME/.zshrc"
    echo '[ -s "/usr/local/opt/nvm/nvm.sh" ] && \. "/usr/local/opt/nvm/nvm.sh"' >> "$HOME/.zshrc"
    echo '[ -s "/usr/local/opt/nvm/etc/bash_completion.d/nvm" ] && \. "/usr/local/opt/nvm/etc/bash_completion.d/nvm"' >> "$HOME/.zshrc"
else
    echo 'Error: .zshrc file does not exist.'
fi
