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
            link : function(scope, element, attributes  ){

                var favoritedBands = JSON.parse(localStorage.getItem("favBands"));

                scope.checkboxState = {

                    value : favoritedBands.indexOf(scope.model.name) != -1?true:false

                }

                scope.marcarBanda = function(checkboxState){

                    debugger;
                    if (typeof(Storage) !== "undefined") {


                        //Deseralizar el JSON
                        var bandsArray = JSON.parse(localStorage.getItem("favBands"));

                        //Caso primera vez en el que el arreglo no existe
                        if(bandsArray == null){
                            bandsArray = [];
                        }

                        //Caso en el que se estan agregando elementos a la lista
                        if(checkboxState){

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
    });