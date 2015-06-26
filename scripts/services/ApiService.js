angular
    .module("jeviteca")
    .factory("ApiService", ["$http", function($http){

        var favoriteBands;

        var objApiService = {};


        objApiService.obtenerDatos = function (ruta) {

            return $http.get(ruta);

        };

        objApiService.bandIsFavorite = function(bandName){
            debugger;

            var favoriteBands = this.loadFavoritedBandsArray();
            return favoritedBands.indexOf(bandName) != -1?true:false;
        }


        objApiService.loadFavoritedBandsArray = function(){


            if(favoriteBands == null){
                var tempArray = JSON.parse(localStorage.getItem("favBands"));

                if(tempArray == null){
                    favoritedBands = [];
                }
                else
                {
                    favoritedBands = tempArray;
                }
            }
            return favoritedBands;


        }

        return objApiService;
    }]);