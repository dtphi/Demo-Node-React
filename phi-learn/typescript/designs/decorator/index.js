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
 * Concrete Components provide default implementations of the operations. There
 * might be several variations of these classes.
 */
var ConcreteComponent = /** @class */ (function () {
    function ConcreteComponent() {
    }
    ConcreteComponent.prototype.operation = function () {
        return 'ConcreteComponent';
    };
    return ConcreteComponent;
}());
/**
 * The base Decorator class follows the same interface as the other components.
 * The primary purpose of this class is to define the wrapping interface for all
 * concrete decorators. The default implementation of the wrapping code might
 * include a field for storing a wrapped component and the means to initialize
 * it.
 */
var Decorator = /** @class */ (function () {
    function Decorator(component) {
        this.component = component;
    }
    /**
     * The Decorator delegates all work to the wrapped component.
     */
    Decorator.prototype.operation = function () {
        return this.component.operation();
    };
    return Decorator;
}());
/**
 * Concrete Decorators call the wrapped object and alter its result in some way.
 */
var ConcreteDecoratorA = /** @class */ (function (_super) {
    __extends(ConcreteDecoratorA, _super);
    function ConcreteDecoratorA() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Decorators may call parent implementation of the operation, instead of
     * calling the wrapped object directly. This approach simplifies extension
     * of decorator classes.
     */
    ConcreteDecoratorA.prototype.operation = function () {
        return "ConcreteDecoratorA(".concat(_super.prototype.operation.call(this), ")");
    };
    return ConcreteDecoratorA;
}(Decorator));
/**
 * Decorators can execute their behavior either before or after the call to a
 * wrapped object.
 */
var ConcreteDecoratorB = /** @class */ (function (_super) {
    __extends(ConcreteDecoratorB, _super);
    function ConcreteDecoratorB() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ConcreteDecoratorB.prototype.operation = function () {
        return "ConcreteDecoratorB(".concat(_super.prototype.operation.call(this), ")");
    };
    return ConcreteDecoratorB;
}(Decorator));
/**
 * The client code works with all objects using the Component interface. This
 * way it can stay independent of the concrete classes of components it works
 * with.
 */
function clientCodeDecorator(component) {
    // ...
    console.log("RESULT: ".concat(component.operation()));
    // ...
}
/**
 * This way the client code can support both simple components...
 */
var simple = new ConcreteComponent();
console.log('Client: I\'ve got a simple component:');
clientCodeDecorator(simple);
console.log('');
/**
 * ...as well as decorated ones.
 *
 * Note how decorators can wrap not only simple components but the other
 * decorators as well.
 */
var decorator1 = new ConcreteDecoratorA(simple);
var decorator2 = new ConcreteDecoratorB(decorator1);
console.log('Client: Now I\'ve got a decorated component:');
clientCodeDecorator(decorator2);
