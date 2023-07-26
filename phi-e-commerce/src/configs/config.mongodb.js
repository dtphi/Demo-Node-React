'use strict'
// level 0
const config = {
    app: {
        port: 3056
    },
    db: {
        host: 'localhost',
        port: 27017,
        name: 'db'
    }
}

// module.exports = config

// level 1
/*const dev = {
    app: {
        port: 3056
    },
    db: {
        host: 'localhost',
        port: 27017,
        name: 'dbDev'
    }
}

const pro = {
    app: {
        port: 3056
    },
    db: {
        host: 'localhost',
        port: 27017,
        name: 'dbPro'
    }
}

const objConfig = { dev, pro }
const env = process.env.NODE_ENV || 'dev'

module.exports = objConfig[env]
*/

// level 2
const dev = {
    app: {
        port: process.env.DEV_APP_PORT || 3056
    },
    db: {
        host: process.env.DEV_DB_HOST || 'localhost',
        port: process.env.DEV_DB_PORT || 27017,
        name: process.env.DEV_DB_NAME || 'dbDev',
        user: process.env.DEV_DB_USER || '',
        pass: process.env.DEV_DB_PASS || '',
        mongodb: process.env.DEV_MONGODB || 'mongodb+srv://dtphikhtn:ry56MxEAWbuucn9u@shop.lkpls3w.mongodb.net'
    }
}

const pro = {
    app: {
        port: process.env.PRO_DB_HOST || 3055,
    },
    db: {
        host: process.env.PRO_DB_HOST || 'localhost',
        port: process.env.PRO_DB_PORT || 27017,
        name: process.env.PRO_DB_NAME || 'dbPro',
        user: process.env.PRO_DB_USER || '',
        pass: process.env.PRO_DB_PASS || ''
    }
}

const objConfig = { dev, pro }
const env = process.env.NODE_ENV || 'dev'
console.log(objConfig[env])
module.exports = objConfig[env]