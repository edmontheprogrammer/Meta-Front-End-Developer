/*
    Installing Node and NPM: 

        Before installing Node.js and npm on your machine, you first need to verify if it's already installed. 

        Verifying the existing Node.js and npm installation on Ubuntu (Linux)
        You can quickly open a new bash (terminal) window on Ubuntu by pressing the CTRL+ALT+t shortcut key.

        In the bash window that opens, type:

        node --version && npm --version

        Both version numbers should appear in the bash window. 

        Installing Node.js and npm: 


        On Mac OS - XCode
To install brew, you need to install Xcode first. Homebrew does not come with its own compiler and it needs Xcode installed for it to work correctly. To install Xcode do the following:

Open a terminal.

Run the following: 

shell xcode-select --install

A popup will appear asking you to confirm the installation. Click on the Install button.

Agree to the license agreement.

brew
Macs do not come with package managers like most Linux distributions. To make up for this an external tool called brew was created. To install brew, go to the official website  (   https://brew.sh/   )  and copy the command provided, open a terminal and run the command :

1
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
Once Brew is insatalled you can run the following command in the terminal

brew install node  

Homebrew will download and install the dependancies, once this is complete, confirm the installation by typing 

node -v

This will display the Node.js version

Type :

 npm -v

to display the NPM version number.


*/