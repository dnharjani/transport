var _ = require('underscore');
var Promise = require('promise');
var request = require('request');
var DisruptionModelService = require('../modelServices/disruptionModelService');

function DisruptionService() {
}

DisruptionService.prototype.getDisruptionById = function(disruptionId){
    return DisruptionModelService.getDisruptionById(disruptionId);
};


module.exports = new DisruptionService();

