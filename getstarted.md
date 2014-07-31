---
title: Get Started
order: 20
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

### Running ZeroVM on Zebra

Another easy way to experiment with ZeroVM is through
[Zebra](https://zebra.zerovm.org). Zebra is an beta-testing service
built on [ZeroCloud](https://github.com/zerovm/zerocloud) and
OpenStack Swift which Rackspace has provided to the ZeroVM community.
This allows you to experiment with ZeroVM with minimal setup. If you'd
like to try it out, you can
[register](https://zebra.zerovm.org/register.html) for a beta account.
To get started, we recommend reading through the
[Zebra documentation](http://docs.zerovm.org/en/latest/zebra/zebra.html)
and [tutorials](http://docs.zerovm.org/en/latest/zebra/tutorial.html).

### Running ZeroVM On Your Own ZeroCloud Cluster

For the not-so-faint-of-heart it is also possible to set up your own
ZeroCloud cluster. This involves standing up an OpenStack Swift
cluster and then installing the ZeroCloud middleware on the proxy and
storage nodes. There is a
[repository](https://github.com/ludditry/ansible-zwift) on GitHub
which contains the Ansible recipes used for deploying Zebra. These can
be a great starting point for building your own ZeroCloud cluster.
