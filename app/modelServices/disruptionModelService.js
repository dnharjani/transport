var _ = require('underscore');
var Promise = require('promise');
var request = require('request');
var DisruptionModel = require('../services/databaseService').db.disruption;

function DisruptionModelService() {
}

DisruptionModelService.prototype.getDisruptionById = function(disruptionId){
    return DisruptionModel.findOne({
        where: {
            id: disruptionId
        }
    });
};


module.exports = new DisruptionModelService();

