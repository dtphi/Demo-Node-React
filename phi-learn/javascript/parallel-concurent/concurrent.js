// The grogram synchronous and asynchronous and parallel
const {
    getDataXml,
    xmlToJson,
    showJsonData
} = require('./exports')

const run = async () => {
    const tasks = []
    for (let i = 0; i < 4; i++) {
        tasks.push(getDataXml(`getXML ${i}`))
        tasks.push(xmlToJson(`xml to json ${i}`))
        tasks.push(showJsonData(`json to data ${i}`))
    }

    const result = await Promise.all(tasks)
    console.log(`Result run concurrent::`, result)
}

run()