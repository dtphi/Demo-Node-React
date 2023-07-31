const fnCallback = name => {
    console.log(` Hello ${name}`)
}

const asyncOperation = (name, callback) => {
    callback(name)
}

asyncOperation('John', fnCallback)

// Callback hell.
function wakeUp(doSomeThing){
    doSomeThing()
}

function brushTeeth(doSomeThing){
    doSomeThing()
}

function have_breakfast(doSomeThing){
    doSomeThing()
}

// Code not good
function main(){
    wakeUp(function(){
      brushTeeth(function(){
        have_breakfast(function(){
          console.log('OMG!!!!')
        })
      })
    })
}
main()