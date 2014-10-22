---
title: ZeroCloud
order: 30
redirect_from:
  - zebra.htm
  - zebra.html

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


To get started using ZeroCloud, check out the
[documentation](https://zerovm.readthedocs.org/en/latest/zerocloud/overview.html)

If you get stuck, feel free to
[contact us](https://zerovm.readthedocs.org/contact.html).
