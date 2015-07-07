angular
    .module("jeviteca")
    .factory("WebStorageFactory", ["$http", function($http){


        var favoriteBands;

        var objApiService = {};

        objApiService.bandIsFavorite = function(bandName){
             this.loadFavoritedBandsArray();
             return favoriteBands.indexOf(bandName)!=-1;
         }


         objApiService.loadFavoritedBandsArray = function(){

             if(favoriteBands == null){
                 var tempArray = JSON.parse(localStorage.getItem("favBands"));

                 if(tempArray == null){
                    favoriteBands = [];
                 }
                 else {
                    favoriteBands = tempArray;
                 }
             }
             return favoriteBands;
         }
         return objApiService;
    }]);
