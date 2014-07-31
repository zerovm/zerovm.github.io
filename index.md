---
layout: frontpage
redirect_from: index.htm
---

## What is ZeroVM?

ZeroVM is an open source virtualization technology that is based on
the Chromium Native Client (NaCl) project. ZeroVM creates a secure and
isolated execution environment which can run a single thread or
application. ZeroVM is designed to be lightweight, portable, and can
easily be embedded inside of existing storage systems. This
functionality allows developers to push their application to their
data instead of having to pull their data to their application, as is
the case with more traditional architectures.

----

<div class="row">
<div class="three columns alpha"> <p> </p> </div>
<div class="five columns ">
<center><a href="getstarted.htm"><span class="illo compute"></span></a>
<h3>Get Started</h3></center>
</div>
<div class="five columns">
<center><a href="download.htm"><span class="illo download"></span></a>
<h3>Download Now</h3></center>
</div>
<div class="three columns omega"> <p> </p> </div>
</div>

----


## More Details

While ZeroVM itself provides only raw execution environment, the
[ZeroVM Run Time (ZRT)](https://github.com/zerovm/zrt) includes a port
of glibc and an in-memory file system. This provides a C99 compliant
environment supporting most of the POSIX syscall API. ZeroVM doesn't
expose any non C99 or non POSIX API. All ZeroVM magic is handled
transparently to the application. True to POSIX/UNIX traditions, all
IO to and from ZeroVM is modeled as files. Input data is presented to
application as STDIN, log as STDERR and output as STDOUT.
Communication channels with peer ZeroVM instances are also presented
as files. The rest of the visible file system is all transient and
memory-backed in the current implementation. The standard C99 library
and a major part of POSIX are available; however, there are some
behavioral deviations from what would be expected as a "normal"
implementation. For example, since ZeroVM is deterministic, time
functions always return zero. (We assume this is within the C99
standard.) This could be interpreted by the application as if it is
running on an infinitely fast computer. Threading is cooperative
(handled automatically) and deterministic, hence all thread
synchronization primitives are NOPs. Developing applications for
ZeroVM requires use of the provided cross-compilation GNU
[toolchain](https://github.com/zerovm/toolchain).

----

<div class="row">
<div class="eight columns alpha">
<center><p><a href="http://docs.zerovm.org">Detailed ZeroVM Documentation</a></p></center>
</div>
<div class="eight columns omega">
<center><p><a href="https://github.com/zerovm/">
<i class="fa fa-github-alt"><!-- this text is important, Jekyll
renders the page wrong if the i element is empty --></i>
Learn more at GitHub</a></p></center>
</div>
</div>
