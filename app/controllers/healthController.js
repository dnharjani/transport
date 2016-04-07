var httpError = require('http-errors');
var Promise = require('promise');
var _ = require('underscore');

/*
    This route / controller makes sure that the api starts correctly
    it's used in the most important functional test and makes sure that automated builds fail fast if there are setup errors
     - DN
 */
function HealthController() {
}

function get(req, res, next) {
    res.json({health: true});
}


HealthController.prototype = {
    get: get
};

module.exports = new HealthController();