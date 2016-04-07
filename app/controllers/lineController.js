var httpError = require('http-errors');
var Promise = require('promise');
var _ = require('underscore');

function LineController() {
}

function get(req, res, next) {

}


LineController.prototype = {
    get: get
};

module.exports = new LineController();