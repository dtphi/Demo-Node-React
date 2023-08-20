const CONNECT = 'connect'
const CONNECTION = 'connection'
const REQUEST = 'request'
const MESSAGE = 'message'
const DISCONNECT = 'disconnect'

module.exports = {
    srEvent: {
        connection: CONNECTION,
        request: REQUEST,
        disconnect: DISCONNECT
    },
    srEmit: {
        message: MESSAGE
    },
    clEvent: {
        connect: CONNECT,
        message: MESSAGE,
        disconnect: DISCONNECT
    },
    clEmit: {
        request: REQUEST,
    }
}
