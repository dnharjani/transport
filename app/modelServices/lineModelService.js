var _ = require('underscore');
var Promise = require('promise');
var request = require('request');
var LineModel = require('../services/databaseService').db.line;

function LineModelService() {
}

LineModelService.prototype.getLineById = function(lineId){
    return LineModel.findOne({
        where: {
            id: lineId
        }
    });
};

LineModelService.prototype.getLines = function(){
    return LineModel.findAll({raw: true});
};


module.exports = new LineModelService();

