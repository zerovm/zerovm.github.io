---
title: Download
order: 40
redirect_from: download.htm
---

## Download ZeroVM

ZeroVM is free to download, use, and extend. Browse our
[Git](https://github.com/zerovm/) repositories to find source code,
command-line utilities, and run-time libraries. Plenty of sample code
and examples for porting your project to ZeroVM are available as well.
Want to give back to the project, great! Contact us and and tell us
about your pull request.

---

### Installation

Binary packages are for Ubuntu 12.04 LTS 64-bit only.

---

#### Install apt-get repository:

Add a new source to **sources.list**:

    sudo su -c 'echo "deb http://packages.zerovm.org/apt/ubuntu/ precise main" > /etc/apt/sources.list.d/zerovm-precise.list'

Install zerovm GPG key:

    wget -O- http://packages.zerovm.org/apt/ubuntu/zerovm.pkg.key | sudo apt-key add -

Update packages:

    sudo apt-get update

---

#### Install binary files and utils

Install ZeroVM packages:

    sudo apt-get install zerovm

Install ZeroVM command-line shell:

    sudo apt-get install zerovm-cli

---

#### Run some binaries

Python 2.7


    wget http://packages.zerovm.org/zerovm-samples/python.tar
    echo 'print "Hello"' > hello.py
    zvsh --zvm-image python.tar python @hello.py

---

#### Install development tools

Install ZeroVM debug/development tools:

    sudo apt-get install zerovm-dev

Install ZeroVM GCC toolchain:

    sudo apt-get install gcc-4.4.3-zerovm

Install some build tools:

    sudo apt-get install make automake autoconf git

Now you can build some sample programs:

    git clone https://github.com/zerovm/zerovm-samples
    cd zerovm-samples
    make

Or you can see how to port some existing software to ZeroVM:

    git clone https://github.com/zerovm/zerovm-ports
    cd zlib
    cat README.md

---

### GitHub Links

<!-- the whitespace in the i elements is important, without it, Jekyll
will rander the page incorrectly -->

* [<i class="fa fa-github-alt"> </i>Source code](https://github.com/zerovm/zerovm)
* [<i class="fa fa-github-alt"> </i>Command&#8211;line tools](https://github.com/zerovm/zerovm-cli)
* [<i class="fa fa-github-alt"> </i>Run&#8211;time library](https://github.com/zerovm/zrt)
* [<i class="fa fa-github-alt"> </i>GCC toolchain](https://github.com/zerovm/toolchain)
  (Installation: [README.md](https://github.com/zerovm/toolchain/blob/master/README.md))
* [<i class="fa fa-github-alt"> </i>Sample code &amp; libraries](https://github.com/zerovm/zerovm-samples)
* [<i class="fa fa-github-alt"> </i>Sample software &amp; libraries ported to ZeroVM ](https://github.com/zerovm/zerovm-ports)
