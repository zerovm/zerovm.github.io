---
title: Get Started
order: 20
redirect_from: getstarted.htm
---

## Getting Started with ZeroVM

### Running ZeroVM Locally

The easiest way to get started with ZeroVM is to download and install
the packages and run ZeroVM locally. If you happen to be running
Ubuntu 12.04 we have packages available on our
[download](download.html) page. You can also using some of the CLI
tools to more easily create and run ZeroVM instances. More detailed
documentation for the CLI tools can be found
[here](http://docs.zerovm.org/en/latest/clitools.html).

### Running ZeroVM On Your Own ZeroCloud Cluster

For the not-so-faint-of-heart it is also possible to set up your own
ZeroCloud cluster. This involves standing up an OpenStack Swift
cluster and then installing the ZeroCloud middleware on the proxy and
storage nodes. There is a
[repository](https://github.com/ludditry/ansible-zwift) on GitHub
which contains the Ansible recipes. These can
be a great starting point for building your own ZeroCloud cluster.
