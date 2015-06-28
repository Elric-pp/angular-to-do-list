var app = angular.module('app', []);

app.controller('loginCtrl', ['$scope', function($scope){
    $scope.userName= "";
    $scope.passwd = "";

    $scope.login = function(){
    	location = '/home.html'
    	console.log(location);
    	console.log(location);
    	console.log(location);
    }
}]);
