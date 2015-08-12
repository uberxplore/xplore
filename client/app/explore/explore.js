angular.module('uberxplore.explore', ['ngTouch', 'ngAnimate'])

.controller('ExploreController', function($scope, $http, Locations) {
  // start with loading state being true, flip after Yelp results load
  $scope.isLoading = true;
  
  $scope.exploreResults = [];
  // do a Yelp API call to set locations
  $http.get('/search')
    .success(function(data) {
      $scope.isLoading = false;
      console.log('success:',data);
      $scope.exploreResults = data;
    })
    .catch(function(err) {
      console.log('error:',err);
    })
    .finally(function() {
      $scope.isLoading = false;
    });

  $scope.currentIndex = 0;


  // Show next on a swipe right
  $scope.nextEntry = function() {
    if ($scope.currentIndex < $scope.exploreResults.length - 1) {
      $scope.currentIndex++;
    } else {
      $scope.currentIndex = 0;
    }
  };

  // Show previous on a swipe left
  $scope.prevEntry = function() {
    if ($scope.currentIndex > 0) {
      $scope.currentIndex--;
    }
    else {
      $scope.currentIndex = $scope.exploreResults.length - 1;
    }
  };

  $scope.removeFromView = function(index) {
    $scope.exploreResults.splice(index, 1);
    console.log(Locations);
  };

  $scope.addToItinerary = function(index) {
    Locations.push($scope.exploreResults[index]);
    $scope.exploreResults.splice(index, 1);
    console.log(Locations);
  };

  // converts meters from Yelp data to miles with 1 decimal place
  $scope.convertDistance = function(meters) {
    return Math.round(meters / 160) / 10;
  };

  $scope.isCurrentSlideIndex = function(index) {
    return index === $scope.currentIndex;
  };
});