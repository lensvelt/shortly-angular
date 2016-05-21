angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {

  $scope.fetchLinks = function() {
    Links.getAll()
    .then(function(data) {
      console.log(data);
      $scope.allLinks = data;
    });
  };

  $scope.fetchLinks();

});

