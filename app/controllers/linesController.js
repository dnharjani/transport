var httpError = require('http-errors');
var Promise = require('promise');
var _ = require('underscore');

function LinesController() {
}

function get(req, res, next) {

}


LinesController.prototype = {
    get: get
};

module.exports = new LinesController();