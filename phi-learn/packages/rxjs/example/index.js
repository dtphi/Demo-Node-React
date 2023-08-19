const Rx = require('rx')

const observable = Rx.Observable.create(observer => {
    observer.next('hello')
    observer.next('world')
})
debugger
observable.subscribe(val => console.log(val))
// hello
// world