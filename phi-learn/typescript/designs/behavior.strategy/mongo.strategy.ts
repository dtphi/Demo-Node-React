import { Strategy } from "./IStrategy"

/**
 * Concrete Strategies implement the algorithm while following the base Strategy
 * interface. The interface makes them interchangeable in the Context.
 */
class MongoStrategy implements Strategy {
    public doAlgorithm(data: string[]): string[] {
        console.log(`Strategy Mongoose`)
        return data.sort();
    }
}

export default MongoStrategy