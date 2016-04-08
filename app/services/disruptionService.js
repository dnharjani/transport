var _ = require('underscore');
var Promise = require('promise');
var request = require('request');
var DisruptionModelService = require('../modelServices/disruptionModelService');

function DisruptionService() {
}

DisruptionService.prototype.getDisruptionById = function(disruptionId){
    return DisruptionModelService.getDisruptionById(disruptionId);
};

DisruptionService.prototype.addDisruption = function(){
};

DisruptionService.prototype.removeDisruption = function(){
};



module.exports = new DisruptionService();

