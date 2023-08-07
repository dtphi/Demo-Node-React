const promiseFn = message => {
    return new Promise(resolve => {
        // code to collect
        resolve(message)
    })
}

const getDataXml = async (message) => {
    return promiseFn(message)
}

const xmlToJson = async (message) => {
    return promiseFn(message)
}

const showJsonData = async (message) => {
    return promiseFn(message)
}

module.exports = {
    getDataXml,
    xmlToJson,
    showJsonData
}