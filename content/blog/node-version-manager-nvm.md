---
template: blog-post
title: "Node Version Manager (nvm) "
publishedDate: 2022-09-08T20:18:20.835Z
description: "Installation & Up-gradation, Troubleshooting, Installation
  Verification, Usage,  "
featured: true
img: ../../static/images/nvm.png
imgAlt: node_nvm
tags:
  - Node Version Manager
  - nvm
---
### Install & Update Script

To **install** or **update** nvm, you can use the following cURL or Wget command:

```nginx
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
```

```nginx
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
```

### Troubleshooting

If you face any error command not found, then run the following commands for the different shells on the command line to fix the issue:

```nginx
bash: source ~/.bashrc

zsh: source ~/.zshrc

ksh: . ~/.profile
```

### Verify Installation

To verify that **nvm** has been installed, do:

```nginx
command -v nvm
```

## Usage

Downloading, compiling and installing the latest version of node, use the following commands:

```nginx
nvm install node # "node" is an alias for the latest version
```

Installing specific version:

```nginx
nvm install 14.7.0 # or 16.3.0, 12.22.1, etc
```

List available versions:

```nginx
nvm ls-remote
```

Setting up default global version:

```nginx
nvm alias default 14.7.0 #(specify the required version)
```