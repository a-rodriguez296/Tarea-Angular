angular
    .module("jeviteca")
    .directive("elementoAlbum", function(){

        return{
            restrict: "AE",
            templateUrl: "views/ElementoAlbum.html",
            replace:"true",
            scope : {
                album : "="
            }
        }
    });