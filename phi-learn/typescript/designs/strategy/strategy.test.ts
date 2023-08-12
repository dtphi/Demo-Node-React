import Context from "."
import MongoStrategy from "./mongo.strategy"
import PostgresStrategy from "./postgres.strategy"

/**
 * The client code picks a concrete strategy and passes it to the context. The
 * client should be aware of the differences between strategies in order to make
 * the right choice.
 */
const context = new Context(new MongoStrategy())
console.log('Client: Strategy is set to normal sorting.')
context.doSomeBusinessLogic()

console.log('')

console.log('Client: Strategy is set to reverse sorting.')
context.setStrategy(new PostgresStrategy())
context.doSomeBusinessLogic()