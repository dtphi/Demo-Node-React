/**
 * The Facade class provides a simple interface to the complex logic of one or
 * several subsystems. The Facade delegates the client requests to the
 * appropriate objects within the subsystem. The Facade is also responsible for
 * managing their lifecycle. All of this shields the client from the undesired
 * complexity of the subsystem.
 */
var Facade = /** @class */ (function () {
    /**
     * Depending on your application's needs, you can provide the Facade with
     * existing subsystem objects or force the Facade to create them on its own.
     */
    function Facade(subsystem1, subsystem2) {
        this.subsystem1 = subsystem1 || new Subsystem1();
        this.subsystem2 = subsystem2 || new Subsystem2();
    }
    /**
     * The Facade's methods are convenient shortcuts to the sophisticated
     * functionality of the subsystems. However, clients get only to a fraction
     * of a subsystem's capabilities.
     */
    Facade.prototype.operation = function () {
        var result = 'Facade initializes subsystems:\n';
        result += this.subsystem1.operation1();
        result += this.subsystem2.operation1();
        result += 'Facade orders subsystems to perform the action:\n';
        result += this.subsystem1.operationN();
        result += this.subsystem2.operationZ();
        return result;
    };
    return Facade;
}());
/**
 * The Subsystem can accept requests either from the facade or client directly.
 * In any case, to the Subsystem, the Facade is yet another client, and it's not
 * a part of the Subsystem.
 */
var Subsystem1 = /** @class */ (function () {
    function Subsystem1() {
    }
    Subsystem1.prototype.operation1 = function () {
        return 'Subsystem1: Ready!\n';
    };
    // ...
    Subsystem1.prototype.operationN = function () {
        return 'Subsystem1: Go!\n';
    };
    return Subsystem1;
}());
/**
 * Some facades can work with multiple subsystems at the same time.
 */
var Subsystem2 = /** @class */ (function () {
    function Subsystem2() {
    }
    Subsystem2.prototype.operation1 = function () {
        return 'Subsystem2: Get ready!\n';
    };
    // ...
    Subsystem2.prototype.operationZ = function () {
        return 'Subsystem2: Fire!';
    };
    return Subsystem2;
}());
/**
 * The client code works with complex subsystems through a simple interface
 * provided by the Facade. When a facade manages the lifecycle of the subsystem,
 * the client might not even know about the existence of the subsystem. This
 * approach lets you keep the complexity under control.
 */
function clientCodeFacade(facade) {
    // ...
    console.log(facade.operation());
    // ...
}
debugger
/**
 * The client code may have some of the subsystem's objects already created. In
 * this case, it might be worthwhile to initialize the Facade with these objects
 * instead of letting the Facade create new instances.
 */
var subsystem1 = new Subsystem1();
var subsystem2 = new Subsystem2();
var facade = new Facade(subsystem1, subsystem2);
clientCodeFacade(facade);
