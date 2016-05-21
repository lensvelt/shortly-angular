angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.shorten = function() {
    Links.addOne({ url: $scope.url })
    .then(function(resp) {
      if (resp.status === 200) {
        $location.path('/links');
      }
    });
  };

});
  