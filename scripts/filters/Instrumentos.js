angular
    .module("jeviteca")
    .filter("instrumentos", function(){

        return function(instrumentos){
            return "Instrumentos " + instrumentos.join(", ");
        };
    });
