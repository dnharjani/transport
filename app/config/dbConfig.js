var SettingsConfig = require('./settings/settingsconfig');
var fs = require("fs");
var fileName = SettingsConfig.settings.dbFileName;
var sqlite3 = require("sqlite3").verbose();
var db = new sqlite3.Database(fileName);

module.exports = db;