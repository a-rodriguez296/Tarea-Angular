angular
    .module("jeviteca")
    .directive("elementoBanda",["WebStorageFactory",function( webStorageFactory){

        return{

            restrict : "AE",
            templateUrl: "views/ElementoBanda.html",
            replace : true,
            scope : {
                model : "="

            },
            link : function(scope, element, attributes  ){

                scope.checkboxState = {
                    value : webStorageFactory.bandIsFavorite(scope.model.name)

                }

                scope.marcarBanda = function(checkboxState){

                    if (typeof(Storage) !== "undefined") {

                        var bandsArray = webStorageFactory.loadFavoritedBandsArray()


                        //Caso en el que se estan agregando elementos a la lista
                        if(checkboxState.value){

                            //Agregar el nuevo elemento a esa lista
                            bandsArray.push(scope.model.name);

                        }
                        else{

                            //Eliminar el elemento del arreglo
                            var index = bandsArray.indexOf(scope.model.name);
                            bandsArray.splice(index,1);

                        }

                        //Serializar el nuevo JSON
                        localStorage.setItem("favBands", JSON.stringify(bandsArray));
                    }
                };

            }
        };
    }]);