var _ = require('underscore');
var Promise = require('promise');
var request = require('request');
var DatabaseService = require('../services/databaseService');

function DisruptionModelService() {
    this.model = DatabaseService.models.disruption;
}

DisruptionModelService.prototype.getDisruptions = function(){
    return this.model.findAll({
        where: {
            resolved: 0
        },
        raw: true
    });
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
    return this.model.create({
        lineId: lineId,
        fromStationId: fromStationId,
        toStationId: toStationId,
        resolved: 0,
        reason: reason
    });
};

DisruptionModelService.prototype.removeDisruption = function(disruptionId){
    return this.model.update(
            {
                resolved: 1
            },
            {
            where: {
                id: disruptionId
            }
        })
};


module.exports = new DisruptionModelService();

