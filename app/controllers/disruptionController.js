var httpError = require('http-errors');
var Promise = require('promise');
var _ = require('underscore');
var DisruptionService = require('../services/disruptionService');


function DisruptionController() {
}

function get(req, res, next) {
    var disruptionId = req.params.disruptionId;

    DisruptionService.getDisruptionById(disruptionId).then(function(model){
        res.json(model);
    })
    .catch(function(err) {
        res.status(500).json(err);
    });
}

function post(req, res, next) {
    var lineId = req.body.lineId;
    var fromStationId = req.body.fromStationId;
    var toStationId = req.body.toStationId;
    var fromDate = req.body.fromDate;
    var toDate = req.body.toDate;
    var reason = req.body.reason;

    DisruptionService.addDisruption(lineId, fromStationId, toStationId, fromDate, toDate, reason).then(function(){
        res.status(200).end();
    })
    .catch(function(err) {
        res.status(500).json(err);
    });
}

function del(req, res, next) {
    var disruptionId = req.params.disruptionId;

    DisruptionService.removeDisruption(disruptionId).then(function(){
        res.status(200).end();
    })
    .catch(function(err) {
        res.status(500).json(err);
    });
}

DisruptionController.prototype = {
    get: get,
    post: post,
    delete: del
};

module.exports = new DisruptionController();