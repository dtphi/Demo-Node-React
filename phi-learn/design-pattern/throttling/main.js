const initApp = () => {
    const btn = document.querySelector('button')

    btn.addEventListener('click', throttle(clickCallApi, 3000))
}

const clickCallApi = () => {
    console.log(`Call Api`)
}

document.addEventListener('DOMContentLoaded', initApp)

/**
 * 
 * @param {*} fn 
 * @param {*} delay 
 * @returns 
 */
const throttle = (fn, delay) => {
    delay = delay || 0
    let last = 0
    console.log(`Init last:: ${last}`)

    return () => {
        const callNow = new Date().getTime()
        if ((callNow - last) < delay) {
            console.log(`Return call now:: ${callNow}, last:: ${last}`)
            return
        }
        last = callNow
        console.log(`Continuos clickCallApi:: ${callNow}, last:: ${last}`)
        fn()
    }
}

// Or use debounce function

const debounce = (fn, delay) => {
    delay = delay || 0
    let timerId
    console.log(`Timer id ${timerId}`)

    return () => {
        console.log(`Timer Id previous at:: ${timerId}`)
        if (timerId) {
            clearTimeout(timerId)
            timerId = null
        }

        timerId = setTimeout(() => {
            fn()
        }, delay)
    }
}