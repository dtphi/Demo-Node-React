/**
 * Abstract for implementation for behavior chain.
 */
class AbstractHandler {
    constructor() {
    }

    /**
     * 
     * @param {*} handler 
     * @returns 
     */
    setNextHandler(handler) {
        this.nextHandler = handler

        return this.nextHandler
    }

    /**
     * 
     * @param {*} request 
     * @returns 
     */
    handle(request) {
        if (this.nextHandler) {
            return this.nextHandler.handle(request)
        }

        return null
    }
}

/**
 * DogVoice implementation AbstractHandler.
 * Execute handler for responsibility.
 */
class DogVoice extends AbstractHandler {
    constructor() { super() }

    /**
     * 
     * @param {*} request 
     * @returns 
     */
    handle = (request) => {
        if (request === 'gau gau') {
            return 'Voice of the Dog is::'.concat(request)
        }

        return super.handle(request)
    }
}

class CatVoice extends AbstractHandler {
    constructor() { super() }

    /**
     * 
     * @param {*} request 
     * @returns 
     */
    handle = (request) => {
        if (request === 'meo meo') {
            return 'Voice of the Cat is::'.concat(request)
        }

        return super.handle(request)
    }
}

class MouseVoice extends AbstractHandler {
    constructor() { super() }

    /**
     * 
     * @param {*} request 
     * @returns 
     */
    handle = (request) => {
        if (request === 'ek ek') {
            return 'Voice of the Mouse is::'.concat(request)
        }

        return super.handle(request)
    }
}

/**
 * The client code is usually suited to work with a single handler. In most
 * cases, it is not even aware that the handler is part of a chain.
 */
function clientCodeChain(handler) {
    var voices = ['meo meo', 'ek ek', 'um bo', 'gau gau'];
    for (var _i = 0, voices_1 = voices; _i < voices_1.length; _i++) {
        var voice = voices_1[_i];
        console.log("Client: Who is voice ".concat(voice, "?"));

        var result = handler.handle(voice);
        if (result) {
            console.log("  ".concat(result));
        }
        else {
            console.log("  ".concat(voice, " was left untouched."));
        }
    }
}

/**
 * The other part of the client code constructs the actual chain.
 */
var doc = new DogVoice();
var cat = new CatVoice();
var mouse = new MouseVoice();
doc.setNextHandler(cat).setNextHandler(mouse);

/**
 * Handles on chain
 */
clientCodeChain(cat)