var _ = require('underscore');
var Promise = require('promise');
var request = require('request');
var DisruptionModelService = require('../modelServices/disruptionModelService');

function DisruptionService() {
}

DisruptionService.prototype.getDisruptionById = function(disruptionId){
    return DisruptionModelService.getDisruptionById(disruptionId);
};

DisruptionService.prototype.addDisruption = function(lineId, fromStationId, toStationId, fromDate, toDate, reason){
    return DisruptionModelService.addDisruption(lineId, fromStationId, toStationId, fromDate, toDate, reason);
};

DisruptionService.prototype.updateDisruption = function(disruptionId, fromStationId, toStationId, fromDate, toDate, reason){
    return DisruptionModelService.updateDisruption(disruptionId, fromStationId, toStationId, fromDate, toDate, reason);
};

DisruptionService.prototype.removeDisruption = function(disruptionId){
    return DisruptionModelService.removeDisruption(disruptionId);
};


module.exports = new DisruptionService();

