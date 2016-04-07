var httpError = require('http-errors');
var Promise = require('promise');
var _ = require('underscore');

function DisruptionsController() {
}

function get(req, res, next) {
    var today = new Date();
    var tomorrow = new Date();
    tomorrow.setDate(today.getDate()+1);

    res.json({
        disruptionId: 1,
        lineId: 1,
        fromStationId: 1,
        toStationId: 3,
        fromDate: today,
        toDate: tomorrow
    })
}

function post(req, res, next) {

}

function del(req, res, next) {

}

DisruptionsController.prototype = {
    get: get,
    post: post,
    delete: del
};

module.exports = new DisruptionsController();