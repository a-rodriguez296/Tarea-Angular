angular
    .module("jeviteca")
    .directive("elementoGenero", function(){

        return{

            restrict : "AE",
            templateUrl : "views/ElementoGenero.html",
            replace : true,
            scope : {
                genero : "="
            }
        };

    });
