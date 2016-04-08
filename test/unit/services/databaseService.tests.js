describe('DatabaseService tests', function () {

    proxyquire.preserveCache();

    var DatabaseService = proxyquire('../app/services/databaseService', {
        '../config/dbconfig': {isADatabase: true}
    });

    beforeEach(function (done) {
        done();
    });

    afterEach(function (done) {
        done();
    });

    describe('Setting the database', function () {
        it('should should set the database to the db created in dbconfig', function () {
            expect(DatabaseService.db.isADatabase).to.be.true;
        });
    });


});
