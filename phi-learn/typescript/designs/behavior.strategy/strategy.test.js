"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _1 = require(".");
var mongo_strategy_1 = require("./mongo.strategy");
var postgres_strategy_1 = require("./postgres.strategy");
/**
 * The client code picks a concrete strategy and passes it to the context. The
 * client should be aware of the differences between strategies in order to make
 * the right choice.
 */
var context = new _1.default(new mongo_strategy_1.default());
console.log('Client: Strategy is set to normal sorting.');
context.doSomeBusinessLogic();
console.log('');
console.log('Client: Strategy is set to reverse sorting.');
context.setStrategy(new postgres_strategy_1.default());
context.doSomeBusinessLogic();
