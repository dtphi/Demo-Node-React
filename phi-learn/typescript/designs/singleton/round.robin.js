"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RoundRobinServer = /** @class */ (function () {
    function RoundRobinServer() {
        this.servers = [];
        this.indexSv = 0;
    }
    RoundRobinServer.getInstance = function () {
        if (!RoundRobinServer.instance) {
            RoundRobinServer.instance = new RoundRobinServer();
        }
        return RoundRobinServer.instance;
    };
    RoundRobinServer.prototype.addServer = function (server) {
        this.servers.push(server);
    };
    RoundRobinServer.prototype.getNextServer = function () {
        var server = '';
        if (!this.servers.length) {
            throw new Error('No server available');
        }
        server = this.servers[this.indexSv];
        this.indexSv = (this.indexSv + 1) % this.servers.length;
        return server;
    };
    return RoundRobinServer;
}());
exports.default = RoundRobinServer;
