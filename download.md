---
title: Download
order: 40
redirect_from: download.htm
---

## Download ZeroVM

ZeroVM software is free to download, use, and extend. All code is licensed
under [Apache 2.0](http://www.apache.org/licenses/LICENSE-2.0).

Full documentation and tutorials are available on
[docs.zerovm.org](http://docs.zerovm.org/), hosted by
[Read the Docs](https://readthedocs.org/).

---

### Install ZeroCloud

ZeroCloud is a converged cloud storage and computation platform built on
[OpenStack Swift](http://swift.openstack.org/).

The easiest way to get up and running with ZeroCloud is to use the Vagrant
appliance we provide in the
[ZeroCloud repository](https://github.com/zerovm/zerocloud). The appliance
contains a minimal
[DevStack-based](http://docs.openstack.org/developer/devstack/) installation
of OpenStack Swift, ZeroCloud middleware for Swift, and the ZeroVM core.

To set it up:

1. Install [VirtualBox](https://www.virtualbox.org/wiki/Downloads).
2. Install [Vagrant](http://www.vagrantup.com/downloads.html).
3. Install [Git](http://git-scm.com).
4. Clone the ZeroCloud repository:

        git clone https://github.com/zerovm/zerocloud

5. Start the Vagrant appliance:

        cd zerocloud/contrib/vagrant
        vagrant up

With a good internet connection, this will take about 10 minutes to set up.

See [docs.zerovm.org](http://docs.zerovm.org) for further information and
tutorials.

---

### Install ZeroVM

If you just want to use the core ZeroVM application sandbox (without ZeroCloud
or OpenStack Swift), below you will find instructions for installing and
running the software.

Binary packages are for Ubuntu 12.04 LTS 64-bit only.

---

#### Add Launchpad PPA

    sudo apt-get install python-software-properties
    sudo add-apt-repository ppa:zerovm-ci/zerovm-latest

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

    wget http://ci.zerovm.org/latest-packages/zpython2.7.3.tar
    echo 'print "Hello"' > hello.py
    zvsh --zvm-image zpython2.7.3.tar python @hello.py

---

#### Install development tools

If you want to write applications for the ZeroVM platform in C, there is a
modified gcc toolchain for this purpose.

The best way to install the ZeroVM toolchain is to use the Vagrant appliance
we provide in the
[toolchain repository](https://github.com/zerovm/toolchain).

To set it up:

1. Install [VirtualBox](https://www.virtualbox.org/wiki/Downloads).
2. Install [Vagrant](http://www.vagrantup.com/downloads.html).
3. Instal [Git](http://git-scm.com).
4. Clone the toolchain repository:

        git clone https://github.com/zerovm/toolchain

5. Start the Vagrant appliance:

        cd toolchain/contrib/vagrant
        vagrant up

The full toolchain will take about 25-30 minutes to compile.
---

### GitHub Links

<!-- the whitespace in the i elements is important, without it, Jekyll
will rander the page incorrectly -->

* [<i class="fa fa-github-alt octocatlist"> </i>Source code](https://github.com/zerovm/zerovm)
* [<i class="fa fa-github-alt octocatlist"> </i>Command&#8211;line tools](https://github.com/zerovm/zerovm-cli)
* [<i class="fa fa-github-alt octocatlist"> </i>ZeroVM Package Manager (zpm)](https://github.com/zerovm/zpm)
* [<i class="fa fa-github-alt octocatlist"> </i>Run&#8211;time library](https://github.com/zerovm/zrt)
* [<i class="fa fa-github-alt octocatlist"> </i>GCC toolchain](https://github.com/zerovm/toolchain)
  (Installation: [README.md](https://github.com/zerovm/toolchain/blob/master/README.md))
* [<i class="fa fa-github-alt octocatlist"> </i>Sample code &amp; libraries](https://github.com/zerovm/zerovm-samples)
* [<i class="fa fa-github-alt octocatlist"> </i>Sample software &amp; libraries ported to ZeroVM ](https://github.com/zerovm/zerovm-ports)
