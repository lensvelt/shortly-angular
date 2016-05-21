angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.link = {};
  // Your code here
  $scope.addLink = function() {
    Links.addOne({ url: $scope.url })
    .then(function(resp) {
      if (resp.status === 200) {
        $location.path('/links');
      }
    });
  };

});
  