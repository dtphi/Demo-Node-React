/**
 * The Singleton class defines the `getInstance` method that lets clients access
 * the unique singleton instance.
 */
var Singleton = /** @class */ (function () {
    /**
     * The Singleton's constructor should always be private to prevent direct
     * construction calls with the `new` operator.
     */
    function Singleton() {
    }
    /**
     * The static method that controls the access to the singleton instance.
     *
     * This implementation let you subclass the Singleton class while keeping
     * just one instance of each subclass around.
     */
    Singleton.getInstance = function () {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    };
    /**
     * Finally, any singleton should define some business logic, which can be
     * executed on its instance.
     */
    Singleton.prototype.someBusinessLogic = function () {
        // ...
    };
    return Singleton;
}());
/**
 * The client code.
 */
function clientCodeSingleton() {
    var s1 = Singleton.getInstance();
    var s2 = Singleton.getInstance();
    if (s1 === s2) {
        console.log('Singleton works, both variables contain the same instance.');
    }
    else {
        console.log('Singleton failed, variables contain different instances.');
    }
}
clientCodeSingleton();
