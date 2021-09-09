/*
        In the proxy design pattern, one object acts as an interface to another object.
    It’s different from the façade pattern, where all you have is convenience methods that combine
    several other method calls. The proxy sits between the client of an object and the object
    itself and protects the access to that object.

        This pattern may look like overhead but it’s useful for performance purposes. The proxy
    serves as a guardian of the object (also called a “real subject”) and tries to have the real
    subject do as little work as possible.

        The proxy pattern is useful when the real subject does something expensive. In web
    applications, one of the most expensive operations you can do is a network request, so
    it makes sense to combine HTTP requests as much as possible

    https://stackoverflow.com/questions/7379732/what-is-a-javascript-proxy-pattern
 */

function networkFetch(url) {
    return `${url} - sever answer`
}

const cache = new Set();

const proxiedFetch = new Proxy(networkFetch, {
    apply(target, thisArg, argArray) {
        const url = argArray[0];
        if (cache.has(url)) {
            return `${url} - answer from cache`;
        }

        cache.add(url);
        return Reflect.apply(target, thisArg, argArray);
    }
});

console.log(proxiedFetch('angular.io'));
console.log(proxiedFetch('react.io'));
console.log(proxiedFetch('angular.io'));