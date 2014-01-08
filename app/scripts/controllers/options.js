'use strict';

var app = angular.module('delegator',[]);

app.controller('OptionsCtrl', ['$scope', '$timeout', function($scope, $timeout) {

    $scope.proxy = {
      enabled: delegator.options.enabled,
      server: delegator.options.server,
      port: delegator.options.port
    };

    $scope.services = delegator.services;

    $scope.save = function() {
      $scope.saved = true;

      // Hide notification after 2 seconds.
      $timeout(function() {
        $scope.saved = false;
      }, 2000);

      // Stores new settings in local storage.
      localStorage['enabled'] = $scope.proxy.enabled;
      localStorage['server'] = $scope.proxy.server;
      localStorage['port'] = $scope.proxy.port;

      // Reinitialize proxy configuration.
      delegator.proxy.initialize();
    };
}]);