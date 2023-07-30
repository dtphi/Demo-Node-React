# https://feathersjs.com/guides/cli/

# Mac

```bash
brew install nvm
```

## Usage https://stackoverflow.com/questions/16904658/node-version-manager-install-nvm-command-not-found

Create .nvm directory at ~/.nvm location.

mkdir ~/.nvm

Now if you don't have .bash_profile file setup for OS X terminal then please create a .bash_profile at the root level:

nano ~/.bash_profile

Paste below code in the .bash_profile and press CTRL + O and press enter to save .bash_profile file. Press CTRL + X to exit from editor:

export NVM_DIR=~/.nvm
source $(brew --prefix nvm)/nvm.sh

Now either quite (CMD + Q) the terminal or run below command to load .bash_profile settings:

source ~/.bash_profile

Now run nvm ls command to get the list of all installed nodejs versions.

## Using NVM

```bash
source ~/.bash_profile
```

# Issues

## Macos

defaults write com.apple.finder CreateDesktop false && killall Finder
