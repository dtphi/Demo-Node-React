const arr = [3,2,1]
const sortArr = arr.sort()

console.log(`sortArr: ${sortArr}`)
console.log(`arr: ${arr}`)
// Not should using these functions:
// sort(), reverse(), splice() : change the parent array.

// Instead using for ES14 . ES2023 : toSorted(), toReversed()
const arr14 = [3,2,1]
const sortArr14 = arr.toSorted()

console.log(`sortArr ES14: ${sortArr14}`)
console.log(`arr ES14: ${arr14}`)

// with() function
const arrWith = arr14.with(1, 5)
console.log(`arr with: ${arrWith}`)