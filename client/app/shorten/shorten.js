angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.shorten = function() {
    Links.addOne({ url: $scope.url })
    .then(function(resp) {
      if (resp.status === 200) {
        console.log('inside');
        $scope.shortenForm.url.$error.url = false;
        $location.path('/links');
      } else {
        $scope.shortenForm.url.$error.url = true;
      }
    });
  };

});
