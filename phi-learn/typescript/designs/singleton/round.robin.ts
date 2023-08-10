class RoundRobinServer {
    private static instance?: RoundRobinServer

    private servers: Array<string> = []

    private indexSv: number = 0

    private constructor() { }

    public static getInstance(): RoundRobinServer {
        if (!RoundRobinServer.instance) {
            RoundRobinServer.instance = new RoundRobinServer()
        }

        return RoundRobinServer.instance
    }

    public addServer(server: string): void {
        this.servers.push(server)
    }

    public getNextServer(): string {
        let server: string = ''
        if (!this.servers.length) {
            throw new Error('No server available')
        }
        server = this.servers[this.indexSv]
        this.indexSv = (this.indexSv + 1) % this.servers.length

        return server
    }
}

export default RoundRobinServer