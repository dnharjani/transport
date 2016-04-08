var _ = require('underscore');
var Promise = require('promise');
var request = require('request');
var StationModel = require('../services/databaseService').db.station;

function StationModelService() {
}

StationModelService.prototype.getStationById = function(stationId){
    return StationModel.findOne({
        where: {
            id: stationId
        }
    });
};

StationModelService.prototype.getStationsByIds = function(stationIds){
    return StationModel.findAll({
        where: {
            id: {
                $in: stationIds
            }
        },
        raw: true
    });
};



module.exports = new StationModelService();

