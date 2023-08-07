// The grogram synchronous.

const {
    getDataXml,
    xmlToJson,
    showJsonData
} = require('./exports')

const run = async () => {
    for (let i = 0; i < 4; i++) {
        const xml = await getDataXml(`getXML ${i}`)
        console.log(xml)

        const json = await xmlToJson(`xml to json ${i}`)
        console.log(json)

        const data = await showJsonData(`json to data ${i}`)
        console.log(data)
    }
}

run()