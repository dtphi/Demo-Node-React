class Database {
    /**
       * Constructor function for Database.
       */
    constructor() {
        this.connect()
    }

    /**
       * Connect to the database
       */
    connect(type = 'mongodb') {
        console.log('Connected to database successfully')
    }

    /**
       * Connect to the database with the singleton pattern specified
       * @returns
       */
    static getInstance() {
        if (!Database.instance) {
            Database.instance = new Database()
        }
        return Database.instance
    }
}

const instanceDatabase = Database.getInstance()
module.exports = instanceDatabase