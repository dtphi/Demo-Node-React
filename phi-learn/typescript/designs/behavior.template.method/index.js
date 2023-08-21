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
 * The Abstract Class defines a template method that contains a skeleton of some
 * algorithm, composed of calls to (usually) abstract primitive operations.
 *
 * Concrete subclasses should implement these operations, but leave the template
 * method itself intact.
 */
var AbstractClass = /** @class */ (function () {
    function AbstractClass() {
    }
    /**
     * The template method defines the skeleton of an algorithm.
     */
    AbstractClass.prototype.templateMethod = function () {
        this.baseOperation1();
        this.requiredOperations1();
        this.baseOperation2();
        this.hook1();
        this.requiredOperation2();
        this.baseOperation3();
        this.hook2();
    };
    /**
     * These operations already have implementations.
     */
    AbstractClass.prototype.baseOperation1 = function () {
        console.log('AbstractClass says: I am doing the bulk of the work');
    };
    AbstractClass.prototype.baseOperation2 = function () {
        console.log('AbstractClass says: But I let subclasses override some operations');
    };
    AbstractClass.prototype.baseOperation3 = function () {
        console.log('AbstractClass says: But I am doing the bulk of the work anyway');
    };
    /**
     * These are "hooks." Subclasses may override them, but it's not mandatory
     * since the hooks already have default (but empty) implementation. Hooks
     * provide additional extension points in some crucial places of the
     * algorithm.
     */
    AbstractClass.prototype.hook1 = function () { };
    AbstractClass.prototype.hook2 = function () { };
    return AbstractClass;
}());
/**
 * Concrete classes have to implement all abstract operations of the base class.
 * They can also override some operations with a default implementation.
 */
var ConcreteClass1 = /** @class */ (function (_super) {
    __extends(ConcreteClass1, _super);
    function ConcreteClass1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ConcreteClass1.prototype.requiredOperations1 = function () {
        console.log('ConcreteClass1 says: Implemented Operation1');
    };
    ConcreteClass1.prototype.requiredOperation2 = function () {
        console.log('ConcreteClass1 says: Implemented Operation2');
    };
    return ConcreteClass1;
}(AbstractClass));
/**
 * Usually, concrete classes override only a fraction of base class' operations.
 */
var ConcreteClass2 = /** @class */ (function (_super) {
    __extends(ConcreteClass2, _super);
    function ConcreteClass2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ConcreteClass2.prototype.requiredOperations1 = function () {
        console.log('ConcreteClass2 says: Implemented Operation1');
    };
    ConcreteClass2.prototype.requiredOperation2 = function () {
        console.log('ConcreteClass2 says: Implemented Operation2');
    };
    ConcreteClass2.prototype.hook1 = function () {
        console.log('ConcreteClass2 says: Overridden Hook1');
    };
    return ConcreteClass2;
}(AbstractClass));
/**
 * The client code calls the template method to execute the algorithm. Client
 * code does not have to know the concrete class of an object it works with, as
 * long as it works with objects through the interface of their base class.
 */
function clientCodeTemplate(abstractClass) {
    // ...
    abstractClass.templateMethod();
    // ...
}
console.log('Same client code can work with different subclasses:');
clientCodeTemplate(new ConcreteClass1());
console.log('');
console.log('Same client code can work with different subclasses:');
clientCodeTemplate(new ConcreteClass2());
