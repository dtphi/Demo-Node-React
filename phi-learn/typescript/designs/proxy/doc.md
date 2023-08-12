##
Proxy is a structural design pattern that provides an object that acts as a substitute for a real service object used by a client. A proxy receives client requests, does some work (access control, caching, etc.) and then passes the request to a service object.

The proxy object has the same interface as a service, which makes it interchangeable with a real object when passed to a client.


##
Usage examples: While the Proxy pattern isn’t a frequent guest in most TypeScript applications, it’s still very handy in some special cases. It’s irreplaceable when you want to add some additional behaviors to an object of some existing class without changing the client code.

Identification: Proxies delegate all of the real work to some other object. Each proxy method should, in the end, refer to a service object unless the proxy is a subclass of a service.

Conceptual Example

This example illustrates the structure of the Proxy design pattern and focuses on the following questions:

What classes does it consist of?
What roles do these classes play?
In what way the elements of the pattern are related?