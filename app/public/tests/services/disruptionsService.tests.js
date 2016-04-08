describe('Disruptions Service Unit Tests', function(){
  var DisruptionsService;

  beforeEach(module('transport'));

  beforeEach(module(function($provide, $urlRouterProvider) {
    $provide.value('$ionicTemplateCache', function(){} );
    $urlRouterProvider.deferIntercept();
  }));

  beforeEach(inject(function (_DisruptionsService_) {
    DisruptionsService = _DisruptionsService_;
  }));

  it('should be defined', inject(function(DisruptionsService) {
    expect(DisruptionsService).toBeDefined();
  }));

  it('getDisruptions should return an empty array', inject(function(DisruptionsService) {
    expect(DisruptionsService.getDisruptions()).toEqual([]);
  }));

  it('setDisruptions should set the internal disruptions object', inject(function(DisruptionsService) {
    var disruptions = {disruption: true};
    DisruptionsService.setDisruptions(disruptions);
    expect(DisruptionsService.getDisruptions()).toBe(disruptions);
  }));

});
