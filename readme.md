### elb-websockets

Code example for doing websockets over ELB TCP connections.

AWS ELB doesn’t support WebSockets on HTTP/HTTPS (Layer 7) so we need to use the TCP protocol (instead of HTTP), enable `proxy protocol` on elb via a policy and then use a library like node-proxywrap to fake out the `x-forwarded-for` header.