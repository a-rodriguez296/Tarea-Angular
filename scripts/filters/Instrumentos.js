angular
    .module("jeviteca")
    .filter("instrumentos", function(){

        return function(instrumentos){

            var base = "Instrumentos: "

            instrumentos.forEach(function(value){


                base += (value +" ");
            });

            return base;
        };
    });
