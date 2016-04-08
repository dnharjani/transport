describe('Disruption Service tests', function () {

    var DisruptionModelServiceStub = {
        getDisruptionById : sinon.stub()
    };

    DisruptionModelServiceStub.getDisruptionById.returns(new Promise.resolve({id: 1}));

    var DisruptionService = proxyquire('../app/services/disruptionService', {
        '../modelServices/disruptionModelService': DisruptionModelServiceStub
    });

    beforeEach(function (done) {
        done();
    });

    afterEach(function (done) {
        done();
    });

    describe('Getting disruption by id', function () {
        it('should call the model service', function (done) {
            DisruptionService.getDisruptionById(1).then(function(data){
                expect(data).to.not.be.null;
                expect(DisruptionModelServiceStub.getDisruptionById.calledOnce).to.be.true;
                expect(DisruptionModelServiceStub.getDisruptionById.calledWith(1)).to.be.true;
                done();
            })
        });
    });


});
