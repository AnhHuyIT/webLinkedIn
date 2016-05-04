var Background = angular.module('Background', ['ngSanitize']);

Background.controller('BackgroundCtrl', ['$scope','$http', function ($scope, $http) {
  $http.get('JS/background.json').success(function(data) {
    $scope.background = data;
  });
    
    $scope.edit = {statusfullname:{name:"hello", status:false},
                    statusjob:{name:"hello",  status:false},
                    statushistory:{name:"hello",  status:false},
                    statusinformationme:{name:"hello",  status:false},
                    statesummary:{name:"hello",  status:false},
                    stateeducation:{name:"hello",  status:false},
                    stateproject:{name:"hello",  status:false},
                    stateavatar:{name:"hello",  status:false},
                    stateskill:{name:"hello",  status:false}
           				};

            $scope.hidetextbox = function(nameshow){
            	nameshow.status = !nameshow.status;
              console.log(nameshow);   
            };
      
}]);