angular
    .module("jeviteca")
    .service("ApiService", ["$http", function($http){

        this.obtenerDatos = function (ruta) {

            return $http.get(ruta);

        };
    }]);