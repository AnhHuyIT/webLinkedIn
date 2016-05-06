var Background = angular.module('Background', ['ngSanitize']);

Background.controller('BackgroundCtrl', ['$scope','$http', function ($scope, $http) {
  $http.get('JS/background.json').success(function(data) {
    $scope.background = data;
  });
    
    $scope.edit = {statusfullname:{name:"hello", status:false},
                   statuscurrent:{name:"hello", status:false},
                   statuswork_company:{name:"hello", status:false},
                   statusprevious:{name:"hello", status:false},
                    statusskill:{name:"hello",  status:false},
                    statushistory:{name:"hello",  status:false},
                    statusinformationme:{name:"hello",  status:false},
                    statesummary:{name:"hello",  status:false},
                    stateexperience:{name:"hello", status:false},
                    stateexperience_company:{name:"hello", status:false},
                    stateexperience_local:{name:"hello", status:false},
                    stateexperience_info:{name:"hello", status:false},
                    stateeducation:{name:"hello",  status:false},
                    stateproject:{name:"hello",  status:false},
                    stateavatar:{name:"hello",  status:false},
                    stateskill:{name:"hello",  status:false},
                    changeavatar:{name:"hello", status:false}
           				};

            $scope.hidetextbox = function(nameshow){
            	nameshow.status = !nameshow.status;
              console.log(nameshow);   
            };
      
}]);