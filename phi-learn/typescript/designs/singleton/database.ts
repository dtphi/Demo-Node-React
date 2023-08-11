class Database {
    private static instance?: Database

    private static supportDb: Array<string> = ['mongodb', 'postgresql', 'sqlite', 'mysql']

    private constructor() { }

    public static getInstance = (): Database => {
        if (!Database.instance) {
            Database.instance = new Database()
        }

        return Database.instance
    }

    public connect = (type: string = 'mongodb'): void => {
        if (!Database.supportDb.includes(type)) {
            throw new Error('Invalid database type specified not supported!')
        }

        switch (type) {
            case 'mongodb':
                console.log(`Connected success to ::`, type)

            case 'postgresql':
                console.log(`Connected success to ::`, type)
                break
        }
    }
}

export default Database