angular
    .module("jeviteca", ["ngRoute","route-segment","view-segment"]);




angular
    .module("jeviteca")
    .config(["$routeSegmentProvider","$routeProvider", function ( $routeSegmentProvider, $routeProvider ){


        $routeSegmentProvider.when("/albums", "albums");
        $routeSegmentProvider.when("/bandas", "bandas");
        $routeSegmentProvider.when("/generos", "generos");


        $routeSegmentProvider.segment("albums", {
            controller: "AlbumsCtrl",
            templateUrl: "views/Albums.html",
            resolve : {
                Albums : ["ApiService", function(ApiService){

                    return ApiService.obtenerDatos("data/albums.json");
                }]
            }
        });

        $routeSegmentProvider.segment("bandas", {
            controller: "BandasCtrl",
            templateUrl: "views/Bandas.html",
            resolve : {
                Bandas : ["ApiService", function(ApiService){

                    return ApiService.obtenerDatos("data/bands.json");
                }]
            }

        });

        $routeSegmentProvider.segment("generos", {
            controller: "GenerosCtrl",
            templateUrl: "views/Generos.html",
            resolve : {
                Generos : ["ApiService", function(ApiService){

                    return ApiService.obtenerDatos("data/genres.json");
                }]
            }
        });

        $routeProvider.otherwise({
            redirectTo: "/albums"
        });

    }]);