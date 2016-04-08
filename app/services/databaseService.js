var db = require('../config/dbconfig');

function DatabaseService() {
    this.db = db;
}

module.exports = new DatabaseService();

