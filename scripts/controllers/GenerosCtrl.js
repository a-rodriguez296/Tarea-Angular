angular
    .module("jeviteca")
    .controller("GenerosCtrl",["$scope","Generos",function($scope, Generos){

        $scope.generos = Generos.data;

    }]);