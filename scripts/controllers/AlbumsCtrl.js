angular
    .module("jeviteca")
    .controller("AlbumsCtrl",["$scope","Albums", function($scope, Albums){

        debugger;
        $scope.albums = Albums.data;

    }]);
