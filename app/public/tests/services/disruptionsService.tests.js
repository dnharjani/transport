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

  it('should be defined', function() {
    expect(DisruptionsService).toBeDefined();
  });

  it('getDisruptions should return an empty array', function() {
    expect(DisruptionsService.getDisruptions()).toEqual([]);
  });

  it('setDisruptions should set the internal disruptions object',function() {
    var disruptions = {disruption: true};
    DisruptionsService.setDisruptions(disruptions);
    expect(DisruptionsService.getDisruptions()).toBe(disruptions);
  });

  // TODO Async Test Injection in Service
  it('addDisruption should add a disruption to the list', function() {
  });

  it('removeDisruption should remove a disruption from the list', function() {
  });

  it('refreshDisruptions should refresh the lists of disruptions', function() {
  });
});
