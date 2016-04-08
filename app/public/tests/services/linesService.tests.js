describe('Lines Service Unit Tests', function(){
  var LinesService;

  beforeEach(module('transport'));

  beforeEach(module(function($provide, $urlRouterProvider) {
    $provide.value('$ionicTemplateCache', function(){} );
    $urlRouterProvider.deferIntercept();
  }));

  beforeEach(inject(function (_LinesService_) {
    LinesService = _LinesService_;
  }));

  it('should be defined', inject(function(LinesService) {
    expect(LinesService).toBeDefined();
  }));

  it('getLines should return an empty array', inject(function(LinesService) {
    expect(LinesService.getLines()).toEqual([]);
  }));

  it('setLines should set the internal disruptions object', inject(function(LinesService) {
    var lines = [{line : true}];
    LinesService.setLines(lines);
    expect(LinesService.getLines()).toBe(lines);
  }));

  it('getLineById should return a line object if it exists', inject(function(LinesService) {
    var lines = [
      {
        id: 1
      }
    ];
    LinesService.setLines(lines);

    expect(LinesService.getLineById(1)).toBe(lines[0]);
  }));

  it('getLineById should return undefined if the line does not exist', inject(function(LinesService) {
    var lines = [
      {
        id: 1
      }
    ];
    LinesService.setLines(lines);

    expect(LinesService.getLineById(2)).toEqual(undefined);
  }));

  it('getStationInLineById should return a station object if it exists', inject(function(LinesService) {
    var lines = [
      {
        id: 1,
        stations: [
          {
            id: 1
          }
        ]
      }
    ];
    LinesService.setLines(lines);

    expect(LinesService.getStationInLineById(1, 1)).toBe(lines[0].stations[0]);
  }));

  it('getStationInLineById should return undefined if the station is not in the line', inject(function(LinesService) {
      var lines = [
        {
          id: 1,
          stations: [
            {
              id: 1
            }
          ]
        },
        {
          id: 2,
          stations: [
            {
              id: 2
            }
          ]
        }
      ];
      LinesService.setLines(lines);

      expect(LinesService.getStationInLineById(1, 2)).toEqual(undefined);
  }));



});
