/**
 * 
 * @param {*} name 
 * @returns 
 */
const fnPromise = function asyncOperation(name) {
    return new Promise((resolve, reject) => {
        console.log('Starting promise resolve')
            setTimeout(() => {
                resolve(name);
            }, 1000);
        });
}

/**
 * Call promise
 */
fnPromise('John').then(function(result) {
    console.log(`Hello ${result}`)
}).then().then()

/**
 * 
 * @param {*} doSomeThing 
 * @returns 
 */
const wakeUpPromise = function wakeUp(doSomeThing){
    console.log('wake up')
    return new Promise((resolve, reject) => {
        resolve(doSomeThing)
    })
}

/**
 * 
 * @param {*} doSomeThing 
 * @returns 
 */
const brushTeethPromise = function brushTeeth(doSomeThing){
    console.log('brush teeth')
    return new Promise((resolve, reject) => {
        resolve(doSomeThing)
    })
}

/**
 * 
 * @param {*} doSomeThing 
 * @returns 
 */
const haveBreakfastPromise = function haveBreakfast(doSomeThing){
    console.log('have breakfast')
    return new Promise((resolve, reject) => {
        resolve(doSomeThing)
    })
}

/**
 * Working morning.
 */
function main(){
    wakeUpPromise(brushTeethPromise)
    .then(function(result) {
        return result(haveBreakfastPromise)
    }).then(function(result) {
        return result(function() {
            return 'OMG !!!'
        })
    }).then(function(result) {
        console.log(result, result())
    }).then()
    .finally(function() {
        console.log('finally')
    })
}

main()