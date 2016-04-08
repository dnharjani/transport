var _ = require('underscore');
var Promise = require('promise');
var request = require('request');
var DatabaseService = require('../services/databaseService');

function LineModelService() {
    this.model = DatabaseService.models.line;
}

LineModelService.prototype.getLines = function(){
    return this.model.findAll({raw: true});
};


module.exports = new LineModelService();

