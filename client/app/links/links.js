angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  $scope.link = {};
  $scope.fetchLinks = function() {
    Links.getAll()
    .then(function(data) {
      $scope.allLinks = data;
    });
  };

  $scope.fetchLinks();

});

