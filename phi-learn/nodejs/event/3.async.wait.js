/**
 * 
 * @param {*} n1 
 * @param {*} n2 
 * @returns 
 */
function slowAddition(n1, n2) {
    return new Promise(function (resolve, reject) {
        resolve(n1 + n2)
        /*setTimeout(function () {
                reject(new Error('Increase salary failed'))
            }, 500)*/
    })
}

/**
 * 
 * @returns 
 */
function getUser() {
    return new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve({
                    id: 1,
                    name: 'John',
                    age: 30
                })
            }, 500)
        })
}

/**
 * 
 * @param {*} userId 
 * @returns 
 */
function getComment(userId) {
    return new Promise(function (resolve, reject) {
                setTimeout(function () {
                    resolve({
                        userId: userId
                    })
                }, 500)
            })
}

/**
 * 
 * @param {*} base 
 * @param {*} increaseSalary 
 * @returns 
 */
async function increaseSalary(base, increaseSalary) {
    const user = await getUser()
    const comment = await getComment(user.id)
    console.log('Async User:', user, comment)
    const newSalary = await slowAddition(base, increaseSalary)
    console.log('Async NewSalary:', newSalary)

    return newSalary
}

/**
 * Cal increase salary.
 */
const newSalary = increaseSalary(1000, 1000).then(function (resultSalary) {
    console.log('Then NewSalary:', resultSalary)
}).catch(e => console.log(`Error get new Salary ${e.message}`))
console.log('>>>> Call New Salary:', newSalary)