var Background = angular.module('Background', ['ngSanitize']);

Background.controller('BackgroundCtrl', ['$scope','$http', function ($scope, $http) {
  $http.get('JS/background.json').success(function(data) {
    $scope.background = data;
  });
    
    $scope.AddExp = function(){
              var y = { "Work":"Work (Empty)",
                        "Company":"Company (Empty)",
                        "Time":"Time (Empty)",
                        "Local":"Local (Empty)",
                        "Logo":"https://media.licdn.com/media/AAEAAQAAAAAAAATmAAAAJDdiMDk5Yzk4LWE1MjItNGQ0NC05YmMzLWFjNDgyNzllNzI4Mw.png",
                        "Info":"Infomation (Empty) <br> <br>"};
             console.log(y);
             $scope.background.Experience.push(y);
          };
    
    $scope.AddSkill = function(){
              var y = { "NameSkill":"New Skill"};
             console.log(y);
             $scope.background.Skill.push(y);
          };
    
    $scope.AddPro = function(){
              var y = { "NameProject": "New Project",
                        "Time": "New Time",
                        "Description": "New Description"};
             console.log(y);
             $scope.background.Project.push(y);
          };
    
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