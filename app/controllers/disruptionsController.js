var httpError = require('http-errors');
var Promise = require('promise');
var _ = require('underscore');
var DisruptionService = require('../services/disruptionService');


function DisruptionsController() {
}

function get(req, res, next) {
    DisruptionService.getDisruptionById(1).then(function(model){
        res.json(model);
    })
    .catch(function(err) {
        res.status(500).json(err);
    });
}

function post(req, res, next) {

}

function del(req, res, next) {

}

function put(req, res, next) {

}

DisruptionsController.prototype = {
    get: get,
    post: post,
    put: put,
    delete: del
};

module.exports = new DisruptionsController();