/**
 * Event loop concepts.
 * 1. Macro task ( task queue ) : push into queue before micro task but execute task after micro task.
 * 2. Micro task ( job queue ) : push into queue after macro task but execute job before macro task.
 * 3. Code global task
 */

console.log('Micro task 1')

/**
 * Event loop Macro task : setTimeout
 */
setTimeout(() => {
  console.log('Micro in macro task 2')
}, 100)

/**
 * Event loop Micro task : Promise
 */
new Promise((resolve, reject) => { 
    console.log('Micro task 3')
    resolve('Micro task 4')
}).then((result) => { console.log(result)})

console.log('Micro task 5')

/**
 * Event loop Micro task : Promise
 */
new Promise((resolve, reject) => {
    console.log('Micro task 6')
    resolve('Micro task 7')
}).then((result) => { console.log(result)})

console.log('Micro task 8')