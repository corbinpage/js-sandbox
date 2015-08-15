'use strict';

var feedModule = angular.module('myApp.feed', ['ngRoute'])

feedModule.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/feed', {
    templateUrl: 'feed/feed.html',
    controller: 'FeedCtrl'
  });
}])

feedModule.controller('FeedCtrl', ['$scope', function($scope) {

    var feed = new Instafeed({
        get: 'tagged',
        tagName: 'awesome',
        clientId: 'xxx'
    });
    feed.run();

  $scope.greeting = 'Hola!';
}]);