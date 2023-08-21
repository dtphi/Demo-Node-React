"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * The Context defines the interface of interest to clients.
 */
var Context = /** @class */ (function () {
    /**
     * Usually, the Context accepts a strategy through the constructor, but also
     * provides a setter to change it at runtime.
     */
    function Context(strategy) {
        this.strategy = strategy;
    }
    /**
     * Usually, the Context allows replacing a Strategy object at runtime.
     */
    Context.prototype.setStrategy = function (strategy) {
        this.strategy = strategy;
    };
    /**
     * The Context delegates some work to the Strategy object instead of
     * implementing multiple versions of the algorithm on its own.
     */
    Context.prototype.doSomeBusinessLogic = function () {
        // ...
        console.log('Context: Sorting data using the strategy (not sure how it\'ll do it)');
        var result = this.strategy.doAlgorithm(['a', 'b', 'c', 'd', 'e']);
        console.log(result.join(','));
        // ...
    };
    return Context;
}());
exports.default = Context;
