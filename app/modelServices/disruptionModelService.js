var _ = require('underscore');
var Promise = require('promise');
var request = require('request');
var DatabaseService = require('../services/databaseService');

function DisruptionModelService() {
    this.model = DatabaseService.models.disruption;
}

DisruptionModelService.prototype.getDisruptions = function(){
    return this.model.findAll({raw: true});
};

DisruptionModelService.prototype.getDisruptionById = function(disruptionId){
    return this.model.findOne({
        where: {
            id: disruptionId
        },
        raw: true
    });
};

DisruptionModelService.prototype.addDisruption = function(lineId, fromStationId, toStationId, fromDate, toDate, reason){
    return Promise.resolve();
};

DisruptionModelService.prototype.updateDisruption = function(disruptionId, fromStationId, toStationId, fromDate, toDate, reason){
    return Promise.resolve();
};

DisruptionModelService.prototype.removeDisruption = function(disruptionId){
    return Promise.resolve();
};


module.exports = new DisruptionModelService();

