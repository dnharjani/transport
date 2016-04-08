var SettingsConfig = require('./settings/settingsconfig');
var fs = require("fs");
var fileName = SettingsConfig.settings.dbFileName;
var Sequelize = require('sequelize');

var db = new Sequelize('database', 'username', 'password', {
    host: 'localhost',
    dialect: 'sqlite',

    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },
    storage: 'test.db'
});

var models = [
    'disruption'
];
models.forEach(function(model) {
    module.exports[model] = db.import('../models/' + model);
});

db.sync();