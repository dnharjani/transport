var _ = require('underscore');
var Promise = require('promise');
var request = require('request');
var DisruptionModelService = require('../modelServices/disruptionModelService');

function DisruptionService() {
}

DisruptionService.prototype.getDisruptions = function(){
    return DisruptionModelService.getDisruptions();
};

DisruptionService.prototype.getDisruptionById = function(disruptionId){
    return DisruptionModelService.getDisruptionById(disruptionId);
};

DisruptionService.prototype.addDisruption = function(lineId, fromStationId, toStationId, fromDate, toDate, reason){
    fromDate = fromDate || new Date().toString();
    return DisruptionModelService.addDisruption(lineId, fromStationId, toStationId, fromDate, toDate, reason);
};

DisruptionService.prototype.removeDisruption = function(disruptionId){
    return DisruptionModelService.removeDisruption(disruptionId);
};


module.exports = new DisruptionService();

