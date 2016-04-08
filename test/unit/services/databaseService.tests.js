describe('DatabaseService tests', function () {
    var DatabaseService = proxyquire('../app/services/databaseService', {
        '../config/dbconfig': {theseAreModels: true}
    });

    beforeEach(function (done) {
        done();
    });

    afterEach(function (done) {
        done();
    });

    describe('Setting the database', function () {
        it('should should set the database to the db created in dbconfig', function () {
            expect(DatabaseService.models.theseAreModels).to.be.true;
        });
    });
});
