var httpError = require('http-errors');
var Promise = require('promise');
var _ = require('underscore');

function StationsController() {
}

function get(req, res, next) {

}


StationsController.prototype = {
    get: get
};

module.exports = new StationsController();