angular
    .module("jeviteca")
    .controller("Navegacion", ["$scope","$routeSegment", function($scope , $routeSegment){

        $scope.rutaEsBandas = function(){

            return $routeSegment.startsWith("bandas");
        }

        $scope.rutaEsAlbums = function (){

            return $routeSegment.startsWith("albums");
        }

        $scope.rutaEsGeneros = function (){

            return $routeSegment.startsWith("generos");
        }

    }]);
