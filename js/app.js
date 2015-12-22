var musicApp = angular.module('musicApp', ['ngRoute']);
// Routes
musicApp.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'pages/home.html',
            controller: 'mainController'
        })
        .when('/playlist', {
            templateUrl: 'pages/playlist.html',
            controller: 'playlistController'
        })
});
// Directives
musicApp.directive('test', function() {
    return {
        link: function(scope, elm, attr) {
            elm.bind('mouseenter', function() {
                elm.children('.playpause').show();
            });
            elm.bind('mouseleave', function() {
                elm.children('.playpause').hide();
            });
        }
    };
});
// Controllers
musicApp.controller('mainController', function($scope) {});

musicApp.controller('playlistController', function($scope, $http) {
    $http.get('http://10.1.1.23/MOD/playlist.json').success(function(data) {
        $scope.songs = data.items;
        $scope.jArray = {};
        angular.forEach($scope.playlistSongs, function(song) {
            $scope.jArray.items.push({
                title: song.title,
                artist: song.artist,
                m4a: song.surl
            });
        });
    });
});
musicApp.controller('albunController', function($scope, $http) {

});
musicApp.controller('artistController', function($scope, $http) {

});
musicApp.controller('userController', function($scope, $http) {

});