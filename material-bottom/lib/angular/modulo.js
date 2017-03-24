
    angular.module("firstApplication", ["ngMaterial"]).controller('bottomSheetController',
    	bottomSheetController);
			

			function bottomSheetController ($scope, $mdBottomSheet ){

        $scope.openBottomSheet = function(){
          $mdBottomSheet.show({
            template: '<md-bottom-sheet><b>  Aprenda Angular </b> </md-bottom-sheet>'
          });
        };
      }