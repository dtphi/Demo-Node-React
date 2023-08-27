class State {
    constructor() {
    }

    setContext(context) {
        this.context = context
    }
}

class FanStateOn extends State {
    handleOff = () => {
        // TODO: Process off fan and change state to Off
        console.log(`Fan process off`)
        this.context.transitionTo(new FanStateOff())
    }
}

class FanStateOff extends State {
    handleOn = () => {
        // TODO: Process On fan and change state to On
        console.log(`Fan process on`)
        this.context.transitionTo(new FanStateOn())
    }
}

class FanContext {
    constructor(fanState) {
        console.log(`Fan context starting there is electric`)
        this.transitionTo(fanState)
    }

    transitionTo = (fanState) => {
        this.state = fanState
        this.state.setContext(this)
    }

    requestOff = () => {
        console.log(`Handle Fan Off`)
        this.state.handleOff()
    }

    requestOn = () => {
        console.log(`Handle Fan On`)
        this.state.handleOn()
    }
}


/**
 * Client code
 */
debugger
const context = new FanContext(new FanStateOff())
context.requestOn()
context.requestOff()