describe('Server tests', function () {
    var request = require('request-json');
    var expect = require('chai').expect;

    var client = request.createClient(API_URL);

    it('should return a successful health check', function (done) {
        client.get('health', function (err, res, body) {
            expect(body.health).to.equal(true);
            done();
        });
    });
});