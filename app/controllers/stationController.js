var httpError = require('http-errors');
var Promise = require('promise');
var _ = require('underscore');

function StationController() {
}

function get(req, res, next) {

}


StationController.prototype = {
    get: get
};

module.exports = new StationController();