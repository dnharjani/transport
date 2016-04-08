var _ = require('underscore');
var Promise = require('promise');
var request = require('request');
var DatabaseService = require('../services/databaseService');

function StationModelService() {
    this.model = DatabaseService.models.station;
}

StationModelService.prototype.getStationsByIds = function(stationIds){
    if(typeof stationIds === "number") {
        stationIds = [stationIds];
    }
    else if(!Array.isArray(stationIds)) {
        return Promise.reject('stations must be an array or number');
    }

    return this.model.findAll({
        where: {
            id: {
                $in: stationIds
            }
        },
        raw: true
    });
};



module.exports = new StationModelService();

