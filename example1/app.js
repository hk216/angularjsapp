/*function firstCtrl($scope){
  $scope.hello = "Hello Angular!";
};*/
angular.module('firstCtrl', [])
.controller('firstCtrl',function($scope){
  $scope.hello = "Hello Angular";

});

function secondCtrl($scope){
  $scope.hello = "Hello Monaca!";
};

function thirdCtrl($scope){
  $scope.hello = "Hello World!";
};
//MonaCtrlコントローラーを定義
function MonaCtrl($scope){
  $scope.name = "Monaca!!!";

  $scope.getMonaca = function(){
    return $scope.name;
  };
}
