describe('ApplicationConfigService Unit Tests', function(){
  var ApplicationConfigService;

  beforeEach(module('transport'));

  beforeEach(module(function($provide, $urlRouterProvider) {
    $provide.value('$ionicTemplateCache', function(){} );
    $urlRouterProvider.deferIntercept();
  }));

  beforeEach(inject(function (_ApplicationConfigService_) {
    ApplicationConfigService = _ApplicationConfigService_;
  }));

  it('can get an instance of the application config service', inject(function(ApplicationConfigService) {
    expect(ApplicationConfigService).toBeDefined();
  }));

  it('should have a api url set', inject(function(ApplicationConfigService) {
    expect(ApplicationConfigService.get('apiURL')).toBeDefined();
  }));

});
