var myApp = angular.module("sampleApp", ["ngMaterial"]);		
			

			myApp.controller("firstController", function($scope){

				$scope.title = "Selecione uma cidade";
				$scope.cities = ["San Francisco", "New York"];
			});

			myApp.controller("secondController", function($scope){

				$scope.title = "Selecione uma cidade 2";
				$scope.cities = ["Fortaleza", "Caucaia"];
			});