'use strict';

var app = angular.module('delegator',[]);

app.controller('OptionsCtrl', ['$scope', '$timeout', function($scope, $timeout) {

  $scope.enabled = delegator.settings.enabled;

  $scope.proxies = delegator.settings.proxies;

  $scope.services = delegator.services;

  $scope.save = function(proxies) {
    $scope.saved = true;

    // Hide notification after 2 seconds.
    $timeout(function() {
      $scope.saved = false;
    }, 2000);


    var obj = {
      proxies: []
    };

    for(var i = 0; i < proxies.length; i++) {

      var proxy = proxies[i];

      if (typeof proxy.server === 'undefined' || typeof proxy.port === 'undefined') {
        continue;
      }

      obj.proxies.push({
        server: proxy.server,
        port: proxy.port
      });
    }

    localStorage['enabled'] = $scope.enabled;
    delegator.settings.save(obj);

    // Reinitialize proxy configuration.
    delegator.proxy.initialize();
  };
}]);
