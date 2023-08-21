var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * The Abstraction defines the interface for the "control" part of the two class
 * hierarchies. It maintains a reference to an object of the Implementation
 * hierarchy and delegates all of the real work to this object.
 */
var Abstraction = /** @class */ (function () {
    function Abstraction(implementation) {
        this.implementation = implementation;
    }
    Abstraction.prototype.operation = function () {
        var result = this.implementation.operationImplementation();
        return "Abstraction: Base operation with:\n".concat(result);
    };
    return Abstraction;
}());
/**
 * You can extend the Abstraction without changing the Implementation classes.
 */
var ExtendedAbstraction = /** @class */ (function (_super) {
    __extends(ExtendedAbstraction, _super);
    function ExtendedAbstraction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExtendedAbstraction.prototype.operation = function () {
        var result = this.implementation.operationImplementation();
        return "ExtendedAbstraction: Extended operation with:\n".concat(result);
    };
    return ExtendedAbstraction;
}(Abstraction));
/**
 * Each Concrete Implementation corresponds to a specific platform and
 * implements the Implementation interface using that platform's API.
 */
var ConcreteImplementationA = /** @class */ (function () {
    function ConcreteImplementationA() {
    }
    ConcreteImplementationA.prototype.operationImplementation = function () {
        return 'ConcreteImplementationA: Here\'s the result on the platform A.';
    };
    return ConcreteImplementationA;
}());
var ConcreteImplementationB = /** @class */ (function () {
    function ConcreteImplementationB() {
    }
    ConcreteImplementationB.prototype.operationImplementation = function () {
        return 'ConcreteImplementationB: Here\'s the result on the platform B.';
    };
    return ConcreteImplementationB;
}());
/**
 * Except for the initialization phase, where an Abstraction object gets linked
 * with a specific Implementation object, the client code should only depend on
 * the Abstraction class. This way the client code can support any abstraction-
 * implementation combination.
 */
function clientCodeBridge(abstraction) {
    // ..
    console.log(abstraction.operation());
    // ..
}
/**
 * The client code should be able to work with any pre-configured abstraction-
 * implementation combination.
 */
var implementation = new ConcreteImplementationA();
var abstraction = new Abstraction(implementation);
clientCodeBridge(abstraction);
console.log('');
implementation = new ConcreteImplementationB();
abstraction = new ExtendedAbstraction(implementation);
clientCodeBridge(abstraction);
