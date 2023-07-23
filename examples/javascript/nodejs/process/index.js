/**
 * Check time node executed
 * Running time node cmd: time node process/index.js
 */

// for(let i = 0; i < 1024 * 1024; i++) {
//     setTimeout(() => { Math.sqrt(i) }, 0)
// }
/**
 * Output:
 *  real: 0.41s
 *  user: 0.10s
 *  system: 77% cpu
 *  total: 0.655
 */

for(let i = 0; i < 1024 * 1024; i++) {
    process.nextTick(() => { Math.sqrt(i)})
}
/**
 * Output: 0.28s user 0.11s system 101% cpu 0.377 total
 */

function fnA() {
    console.log('>>>>fnA')
}
console.log('>>>> Starting next tick')
console.log('... running next tick to create new stack...')
process.nextTick(fnA)
console.log('>>>> Done')

Promise.resolve().then(() => { console.log('Promise resolved') })
process.nextTick(() => { console.log('Next Tick') })
