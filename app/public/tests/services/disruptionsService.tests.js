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

  //it('addDisruption should add a disruption to the list', function() {
  //  expect(DisruptionsService.getDisruptions().length).toEqual(0);
  //  DisruptionsService.addDisruption(1, 1, 2, 'today', 'tomorrow', 'none');
  //  expect(DisruptionsService.getDisruptions().length).toEqual(1);
  //});
  //
  //it('removeDisruption should remove a disruption from the list', function() {
  //  var disruptions = [{id: 1}];
  //  DisruptionsService.setDisruptions(disruptions);
  //  expect(DisruptionsService.getDisruptions()).toBe(disruptions);
  //  DisruptionsService.removeDisruption(1);
  //  expect(DisruptionsService.getDisruptions()).toEqual([]);
  //});
});
