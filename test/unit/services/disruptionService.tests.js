describe('Disruption Service tests', function () {

    var DisruptionModelServiceStub = {
        getDisruptionById : sinon.stub(),
        getDisruptions: sinon.stub(),
        addDisruption: sinon.stub(),
        removeDisruption: sinon.stub()
    };

    DisruptionModelServiceStub.getDisruptionById.returns(new Promise.resolve({id: 1}));
    DisruptionModelServiceStub.getDisruptions.returns(new Promise.resolve([{id: 1}]));
    DisruptionModelServiceStub.addDisruption.returns(new Promise.resolve({success: true}));
    DisruptionModelServiceStub.removeDisruption.returns(new Promise.resolve({success: true}));


    var DisruptionService = proxyquire('../app/services/disruptionService', {
        '../modelServices/disruptionModelService': DisruptionModelServiceStub
    });

    beforeEach(function (done) {
        done();
    });

    afterEach(function (done) {
        done();
    });

    describe('getDisruptionById', function () {
        it('should call the model service', function (done) {
            DisruptionService.getDisruptionById(1).then(function(data){
                expect(data).to.not.be.null;
                expect(DisruptionModelServiceStub.getDisruptionById.calledOnce).to.be.true;
                expect(DisruptionModelServiceStub.getDisruptionById.calledWith(1)).to.be.true;
                done();
            })
        });
    });

    describe('getDisruptions', function () {
        it('should call the model service', function (done) {
            DisruptionService.getDisruptions().then(function(data){
                expect(data).to.not.be.null;
                expect(DisruptionModelServiceStub.getDisruptions.calledOnce).to.be.true;
                expect(data.length).to.be.equal(1);
                done();
            })
        });
    });

    describe('addDisruption', function () {
        it('should call the model service', function (done) {
            DisruptionService.addDisruption(1).then(function(data){
                expect(data).to.not.be.null;
                expect(DisruptionModelServiceStub.addDisruption.calledOnce).to.be.true;
                expect(DisruptionModelServiceStub.addDisruption.calledWith(1)).to.be.true;
                done();
            })
        });
    });

    describe('removeDisruption', function () {
        it('should call the model service', function (done) {
            DisruptionService.removeDisruption(1).then(function(data){
                expect(data).to.not.be.null;
                expect(DisruptionModelServiceStub.removeDisruption.calledOnce).to.be.true;
                expect(DisruptionModelServiceStub.removeDisruption.calledWith(1)).to.be.true;
                done();
            })
        });
    });


});
