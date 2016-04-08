angular.module('mocks', [])
  .factory('DisruptionsServiceMock', function($q) {
    return {
      getDisruptions: function(){
        return [
          {
            id: 1,
            lineId: 1,
            fromStationId: 1,
            toStationId: 2,
            fromDate: 'today',
            toDate: 'tomorrow',
            reason: 'none'
          }
        ]
      }
    }
  })
  .factory('LinesServiceMock', function($q) {
    return {
      getLineById: function(id){
        return {
          id: 1,
          name: 'L1',
          stations: [
            {
              id: 1,
              name: 'S1'
            },
            {
              id: 2,
              name: 'S2'
            }
          ]
        }
      },
      getStationInLineById: function(lId, sId) {
        if(sId === 1) {
          return {
            id: 1,
            name: 'S1'
          }
        }
        if(sId === 2) {
          return {
            id: 2,
            name: 'S2'
          }
        }
      }
    }
  });

describe('Disruptions Controller', function() {
  var ctrl, scope;

  beforeEach(module('transport'));
  beforeEach(module('mocks'));
  //
  beforeEach(inject(function(_$controller_, _$rootScope_, _LinesServiceMock_, _DisruptionsServiceMock_) {
    scope = _$rootScope_.$new();

    ctrl = _$controller_('DisruptionsController', {
        $scope: scope,
        DisruptionsService: _DisruptionsServiceMock_,
        LinesService: _LinesServiceMock_
    });
  }));

  it('should be defined', function() {
    expect(ctrl).toBeDefined();
  });

  it('should have a disruption', function() {
    expect(scope.disruptions).toBeDefined();
    expect(scope.disruptions.length).toEqual(1);
    expect(scope.disruptions[0].id).toEqual(1);
    expect(scope.disruptions[0].line.id).toEqual(1);
    expect(scope.disruptions[0].fromStation.id).toEqual(1);
    expect(scope.disruptions[0].toStation.id).toEqual(2);
  });
});
