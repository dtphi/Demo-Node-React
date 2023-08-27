class DatabaseInterfaceStrategy {
    connection(data) {
        console.log('Executing connection')
    }
}

class ConnectionMongoStrategy extends DatabaseInterfaceStrategy {
    connection = (data) => {
        console.log('Executing connection mongo database', data)
        return { connection: true, db: data.host.concat(':').concat(data.port) }
    }
}

class ConnectionPostgresStrategy extends DatabaseInterfaceStrategy {
    connection = (data) => {
        console.log('Executing connection postgres database', data)
        return { connection: true, db: data.host.concat(':').concat(data.port) }
    }
}

class Context {
    constructor(databaseStrategy) {
        this.databaseStrategy = databaseStrategy
    }

    setDatabaseStrategy = (databaseStrategy) => {
        this.databaseStrategy = databaseStrategy
    }

    doConnection = (connectData) => {
        if (!(this.databaseStrategy instanceof DatabaseInterfaceStrategy)) {
            throw new Error('Invalid database strategy')
        }
        console.log(`Connecting to database ${connectData}`)
        const result = this.databaseStrategy.connection(connectData)
        console.log(`Result:::`, result)
    }
}

/**
 * Client connection
 */
const db = new Context(new ConnectionMongoStrategy())
db.doConnection({ userName: 'root', password: 'pass', host: 'http://localhost', port: 12345, dbName: 'abc' })

// connection to Postgres
db.setDatabaseStrategy(new ConnectionPostgresStrategy())
db.doConnection({ userName: 'root', password: 'pass', host: 'http://localhost', port: 54321, dbName: 'cba' })