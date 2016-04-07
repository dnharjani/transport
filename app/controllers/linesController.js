var httpError = require('http-errors');
var Promise = require('promise');
var _ = require('underscore');

function LinesController() {
}

function get(req, res, next) {
    res.json([{
        lineId: 1,
        name: "Line 1",
        stations: [
            {
                stationId: 1,
                name: "Station 1"
            },
            {
                stationId: 2,
                name: "Station 2"
            },
            {
                stationId: 3,
                name: "Station3"
            }
        ]
    }])
}


LinesController.prototype = {
    get: get
};

module.exports = new LinesController();