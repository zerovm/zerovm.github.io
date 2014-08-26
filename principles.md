---
title: Principles
order: 10
redirect_from: principles.htm
---

## The Principles Behind ZeroVM

ZeroVM was founded on some key design tenets, which set it apart from
other technologies. Use cases that require or emphasize several of
these principles will most likely be a good application of the ZeroVM
technology.

### Small, Light, Fast

ZeroVM is extremely small, lightweight, and fast. An execution
environment can start in as little as 5 milliseconds. By eliminating
the operating system and only providing enough functionality to run
simple applications, ZeroVM allows the creation of new execution
environments for each user/request. ZeroVM statically pre-validates
executables, which means there is no interpretation and thus no execution
overhead (apart from the validation).

### Secure

ZeroVM provides a completely secure and isolated execution
environment. The security is derived from the Chromium Native Client
(NaCl) project and is based on the concept of software fault
isolation. ZeroVM creates a secure sandbox and validates all code that
is executed inside the sandbox, ensuring a program will not
accidentally or maliciously break out. This level of security allows for
the execution of arbitrary user code even in untrusted multi-tenant
environments like public cloud storage services. Find out more about
about Native Client on the
[NaCl project website](https://code.google.com/p/nativeclient/) and in
the
[original NaCl white paper](http://static.googleusercontent.com/external_content/untrusted_dlcp/research.google.com/en/us/pubs/archive/34913.pdf).

### Hyper-Scalable

ZeroVM makes it easy to create large clusters of instances,
aggregating the compute power of many individual physical servers into
a single execution environment. Users can leverage the power of 100s
of physical servers for a few seconds or even milliseconds at time.
Users can also define arbitrary connections between these instances,
creating a sequentional processing pipeline or a directed acylic
graph.

### Embeddable

ZeroVM is designed to be embedded into existing storage systems. By
embedding ZeroVM inside an existing storage system, for example, you
can push your applicaiton to your data and run computations in situ,
rather than paying the latency cost of piping data from storage to
compute nodes. This can provide functionality equivalent to stored
procedures for a variety of different storage systems. An example of
this capability is [ZeroCloud](https://github.com/zerovm/zerocloud), a
middleware application for OpenStack Swift which embeds ZeroVM on
storage nodes and enables arbitrary in-place computation on
collections of objects.

### Functional (Deterministic)

Execution inside a ZeroVM environment is functionaly pure or
deterministic, meaning that for any given set of inputs ZeroVM will
always produce the exact same output. This makes it possible to run
multiple copies of an operation in parallel ensuring you will get the
exact same result from each copy. It also allows you to stop and start
execution and even replay operations without impacting the output.
