var chai = require('chai');

global.expect = chai.expect;
global.should = chai.should();
global.sinon = require('sinon');
global.Promise = require('promise');
global.proxyquire = require('proxyquire');

global.API_VERSION = 'v1';
global.API_PREFIX = 'api/' + global.API_VERSION + '/';