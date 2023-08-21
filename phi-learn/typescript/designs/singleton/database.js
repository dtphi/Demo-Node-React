"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Database = /** @class */ (function () {
    function Database() {
        this.connect = function (type) {
            if (type === void 0) { type = 'mongodb'; }
            if (!Database.supportDb.includes(type)) {
                throw new Error('Invalid database type specified not supported!');
            }
            switch (type) {
                case 'mongodb':
                    console.log("Connected success to ::", type);
                case 'postgresql':
                    console.log("Connected success to ::", type);
                    break;
            }
        };
    }
    Database.supportDb = ['mongodb', 'postgresql', 'sqlite', 'mysql'];
    Database.getInstance = function () {
        if (!Database.instance) {
            Database.instance = new Database();
        }
        return Database.instance;
    };
    return Database;
}());
exports.default = Database;
