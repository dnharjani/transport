var _ = require('underscore');
var Promise = require('promise');
var request = require('request');
var LineModelService = require('../modelServices/lineModelService');
var StationModelService = require('../modelServices/stationModelService');

function LineService() {
}

LineService.prototype.getLines = function(){
    // Note: Since SQLite doesn't have an array data type station id's are stored in a comma separated sting
    // Instead of doing 4 more queries for the data we could get all stations in 1 query and zip them
    return LineModelService.getLines().then(function(lines) {
        var lineStationPromises = _.map(lines, function(line) {
            var lineStationIds = line.stations.split(',');
            return StationModelService.getStationsByIds(lineStationIds);
        });

        return Promise.all(lineStationPromises).then(function(lineStations) {
            _.each(lines, function(line, index) {
                line.stations = lineStations[index];
            });

            return Promise.resolve(lines);
        });
    });
};

module.exports = new LineService();

