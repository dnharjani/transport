describe('Api Service Unit Tests', function(){
  var ApiService;
  var $httpBackend;

  beforeEach(module('transport'));

  beforeEach(module(function($provide, $urlRouterProvider) {
    $provide.value('$ionicTemplateCache', function(){} );
    $urlRouterProvider.deferIntercept();
  }));

  beforeEach(inject(function (_ApiService_) {
    ApiService = _ApiService_;
  }));

  beforeEach(inject(function($injector) {
    $httpBackend = $injector.get('$httpBackend');
  }));

  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('should be defined', inject(function(ApiService) {
    expect(ApiService).toBeDefined();
  }));

  it('should send a get request with getDisruptions', inject(function(ApiService, ApplicationConfigService) {
    $httpBackend.expectGET(ApplicationConfigService.get('apiURL') + 'disruptions').respond({});

    ApiService.getDisruptions();
    $httpBackend.flush();
  }));

  it('should send a get request with getLines', inject(function(ApiService, ApplicationConfigService) {
    $httpBackend.expectGET(ApplicationConfigService.get('apiURL') + 'lines').respond({});

    ApiService.getLines();
    $httpBackend.flush();
  }));

  it('should send a post request with addDisruption', inject(function(ApiService, ApplicationConfigService) {
    $httpBackend.expectPOST(ApplicationConfigService.get('apiURL') + 'disruptions', {
      lineId: 1,
      fromStationId: 1,
      toStationId: 2,
      fromDate: 'today',
      toDate: 'tomorrow',
      reason: 'none'
    }).respond({});

    ApiService.addDisruption(1, 1, 2, 'today', 'tomorrow', 'none');
    $httpBackend.flush();
  }));

  it('should send a delete request with removeDisruption', inject(function(ApiService, ApplicationConfigService) {
    $httpBackend.expectDELETE(ApplicationConfigService.get('apiURL') + 'disruptions/1').respond({});

    ApiService.removeDisruption(1);
    $httpBackend.flush();
  }));

});
