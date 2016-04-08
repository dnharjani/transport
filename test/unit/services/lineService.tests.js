describe('Line Service tests', function () {

    var LineModelServiceStub = {
        getLines : sinon.stub()
    };

    LineModelServiceStub.getLines.returns(new Promise.resolve([{id: 1, name: 'L1', stations: '1,2,3'}]));

    var StationModelServiceStub = {
        getStationsByIds : sinon.stub()
    };

    StationModelServiceStub.getStationsByIds.returns(new Promise.resolve([{id: 1, name: 'S1'}, {id: 2, name: 'S2'}, {id: 2, name: 'S2'}]));


    var LineService = proxyquire('../app/services/lineService', {
        '../modelServices/lineModelService': LineModelServiceStub,
        '../modelServices/stationModelService': StationModelServiceStub
    });

    beforeEach(function (done) {
        done();
    });

    afterEach(function (done) {
        done();
    });

    describe('Getting lines', function () {
        it('should get all the lines', function (done) {


            LineService.getLines().then(function(data){
                expect(data).to.not.be.null;
                expect(data.length).to.equal(1);
                expect(data[0].stations.length).to.equal(3);

                done();
            })
        });
    });
});
