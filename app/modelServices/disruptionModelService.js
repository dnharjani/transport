var _ = require('underscore');
var Promise = require('promise');
var request = require('request');
var DatabaseService = require('../services/databaseService');

function DisruptionModelService() {
    this.model = DatabaseService.models.disruption;
}

DisruptionModelService.prototype.getDisruptionById = function(disruptionId){
    return this.model.findOne({
        where: {
            id: disruptionId
        },
        raw: true
    });
};

module.exports = new DisruptionModelService();

