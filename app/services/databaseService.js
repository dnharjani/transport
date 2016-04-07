var db = require('../config/dbconfig');

function DatabaseService() {
    this.db = db;
}

DatabaseService.prototype.getDatabase = function(){
    return this.db;
};


module.exports = new DatabaseService();

