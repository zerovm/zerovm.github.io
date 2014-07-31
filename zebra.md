---
title: Zebra
order: 30
redirect_from: zebra.htm
---

<div class="four columns omega" style="float: right">
  <span class="illo openstack"></span>
</div>

## ZeroVM and OpenStack Swift

ZeroVM has been integrated into OpenStack Swift through a project called
[ZeroCloud](https://github.com/zerovm/zerocloud). ZeroCloud is
middlware for Swift and consists of a job manager which is installed at the
proxy layer and a ZeroVM daemon which is installed on the storage nodes. The
addition of ZeroVM converts Swift from a static object storage solution into a
dynamic storage + compute platform. ZeroCloud can manipulate stored objects and
perform full map/reduce operations in situ, without having to pipe
object data over the network to separate compute nodes. This also means that a
storage cluster can leverage spare compute cycles, where they would otherwise
be wasted.

## The Zebra Playground

### What is Zebra?

[Zebra](https://zebra.zerovm.org) is a ZeroCloud beta-testing service
provided by Rackspace to the ZeroVM community. Zebra provides a place
to experiment with ZeroVM, and to test new features and functionality
at scale to help accelerate development.

### Getting Access to Zebra

Access to Zebra is currently by invitation only, with intention of
opening it to the public in the near future. If you're interested
getting early access, you can
[request an invitation code](https://zebra.zerovm.org/register.html).

### Using Zebra

To get started using Zebra, check out the
[documentation](https://zerovm.readthedocs.org/en/latest/zebra/zebra.html)
and
[tutorials](https://zerovm.readthedocs.org/en/latest/zebra/tutorial.html).
If you get stuck, feel free to
[contact us](https://zerovm.readthedocs.org/contact.html).
