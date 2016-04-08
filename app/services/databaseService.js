var models = require('../config/dbconfig');

function DatabaseService() {
    this.models = models;
}

module.exports = new DatabaseService();

