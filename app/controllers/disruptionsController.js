var httpError = require('http-errors');
var Promise = require('promise');
var _ = require('underscore');
var DisruptionService = require('../services/disruptionService');


function DisruptionsController() {
}

function get(req, res, next) {
    DisruptionService.getDisruptions().then(function(disruptions){
        res.json(disruptions);
    })
    .catch(function(err) {
        res.status(500).json(err);
    });
}


DisruptionsController.prototype = {
    get: get
};

module.exports = new DisruptionsController();