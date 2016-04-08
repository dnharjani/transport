// NOTE: The modelService tests are fairly trivial since most of this code doesn't have much logic and is just a call to the ORM
// Therefore i've only included tests for the stationModelService (since it has a branching path) instead of all modelServices - DN

describe('Station Model Service tests', function () {

    var StationModelStub = {
        findAll: sinon.stub()
    };


    StationModelStub.findAll.returns(new Promise.resolve([{id: 1, name: 'S1'}]));

    var StationModelService = require('../../../app/modelServices/stationModelService');
    StationModelService.model = StationModelStub;

    beforeEach(function (done) {
        done();
    });

    afterEach(function (done) {
        done();
    });

    describe('Getting disruption by id', function () {
        it('should call the model', function (done) {
            StationModelService.getStationsByIds([1]).then(function(data){
                expect(data).to.not.be.null;
                expect(StationModelStub.findAll.calledOnce).to.be.true;
                done();
            })
        });

        it('should convert an int arg to an array before running the query', function (done) {
            StationModelService.getStationsByIds(1).then(function(data){
                expect(data).to.not.be.null;
                done();
            })
        });

        it('should throw an error if the args are not an array or int', function (done) {
            StationModelService.getStationsByIds('blargh').then(function(data){
                expect(true).to.be.false;
                done();
            })
            .catch(function(err) {
                done();
            });
        });
    });


});
