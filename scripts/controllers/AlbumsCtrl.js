angular
    .module("jeviteca")
    .controller("AlbumsCtrl",["$scope","Albums", function($scope, Albums){


        $scope.albums = Albums.data;

    }]);
