'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:ProfileCtrl
 * @description
 * # ProfileCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('Products', function ($scope, $routeParams, User, AuthenticationService, $location, $window, CONFIG, $anchorScroll) {
    $scope.viewProfile = true;
    $scope.mainLoad = true;
    $scope.products = {};
    $scope.host = CONFIG.API_HOST;

    // check if the user is logged in
    if (AuthenticationService.isLogged) {

      // function used to automatically scroll inside the page
      /*$scope.scrollTo = function() {
          setTimeout(function() {
              var old = $location.hash();
              $location.hash('upload');
              $anchorScroll();
              //reset to old to keep any additional routing logic from kicking in
              $location.hash(old);

          });
      };*/

      // get the user's unique id and use it for the http request
      var id = JSON.parse($window.sessionStorage.user).id;

      // get the user's profile
      User.one(id).get().then(function(data, status, headers, config) {
          $scope.mainLoad = false;
          var profile = data;
          // save the user's profile to the scope
          $scope.profile = profile;
      });

      // get the product list
      Product.all().get().then(function(data, status, headers, config) {
          $scope.mainLoad = false;
          var products = data;
          // save the product list to the scope
          $scope.profile = products;
      });

      // CALLBACKS

    } else {
    	$location.path('/login')
    }
  });
