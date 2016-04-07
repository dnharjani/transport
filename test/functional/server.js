describe('Server tests', function () {
    var request = require('request-json');
    var expect = require('chai').expect;

    var client = request.createClient('http://localhost:9000/' + API_PREFIX);

    it('should return a successful health check', function (done) {
        client.get('health', function (err, res, body) {
            console.log(body);

            expect(body.health).to.equal(true);
            done();
        });
    });
});