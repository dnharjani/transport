describe('Disruptions Controller', function() {
  angular.module('disruptionsController.mocks', [])
    .factory('DisruptionsServiceMock', function() {
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
    .factory('LinesServiceMock', function() {
      return {
        getLines: function() {
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


  var ctrl, scope;

  beforeEach(module('transport'));
  beforeEach(module('disruptionsController.mocks'));

  beforeEach(inject(function(_$controller_, _$rootScope_, _LinesServiceMock_, _DisruptionsServiceMock_, _$ionicModal_) {
    scope = _$rootScope_.$new();

    ctrl = _$controller_('DisruptionsController', {
        $scope: scope,
        DisruptionsService: _DisruptionsServiceMock_,
        LinesService: _LinesServiceMock_,
        ionicModal: _$ionicModal_
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

  it('addNewDisruption should set newDisruption', function() {
    expect(scope.newDisruption).toEqual(null);
    scope.addNewDisruption();
    expect(scope.newDisruption).toBeDefined();
    expect(scope.newDisruption.stationsByLine).toBeDefined();
  });

  it('clearNewDisruption should set newDisruption to null', function() {
    expect(scope.newDisruption).toEqual(null);
    scope.newDisruption = 'hello';
    expect(scope.newDisruption).toBeDefined();
    scope.clearNewDisruption();
    expect(scope.newDisruption).toEqual(null);
  });
});
