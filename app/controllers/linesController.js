var httpError = require('http-errors');
var Promise = require('promise');
var _ = require('underscore');
var LineService = require('../services/lineService');

function LinesController() {
}

function get(req, res, next) {
    LineService.getLines().then(function(lines){
        res.status(200).json(lines);
    })
    .catch(function(err) {
       res.status(500).json(err);
    });
}


LinesController.prototype = {
    get: get
};

module.exports = new LinesController();