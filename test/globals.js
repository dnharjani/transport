var chai = require('chai');
var sinon = require('sinon');
require('sinon-as-promised')

global.expect = chai.expect;
global.should = chai.should();
global.sinon = sinon;
global.Promise = require('promise');

var proxyquire = require('proxyquire');
proxyquire.preserveCache();
global.proxyquire = proxyquire;

global.API_VERSION = 'v1';
global.API_URL = 'http://localhost:9000/api/' + global.API_VERSION + '/';