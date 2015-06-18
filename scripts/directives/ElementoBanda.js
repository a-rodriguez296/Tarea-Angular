angular
    .module("jeviteca")
    .directive("elementoBanda", function(){


        return{

            restrict : "AE",
            templateUrl: "views/ElementoBanda.html",
            replace : true,
            scope : {
                model : "="
            },
        };

    });