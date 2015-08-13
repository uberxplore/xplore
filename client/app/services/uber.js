angular.module('uberxplore.uber', [])
.factory('Uber', function($http) {

  // var signin = function() {
  //   return $http.get('/uber/auth');
  // };

  var isAuth = function() {
    return $http.get('/uber/isauth');
  };

  var getProducts = function(latitude, longitude) {
    var params = {
      // --- uncomment these when ready
      // latitude: latitude,
      // longitude: longitude
      latitude: 37.775818,
      longitude: -122.418028
    };

    return $http.get('/uber/products', {params: params});
  };

  var getPriceEstimates = function(startLatitude, startLongitude, endLatitude, endLongitude) {
    var params = {
      // --- uncomment these when ready
      // start_latitude: startLatitude,
      // start_longitude: startLongitude,
      // end_latitude: endLatitude,
      // end_longitude: endLongitude
      start_latitude: 37.334381,
      start_longitude: -121.89432,
      end_latitude: 37.77703,
      end_longitude: -122.419571,
    };

    return $http.get('/uber/price', {params: params});
  };

  var getTimeEstimates = function(startLatitude, startLongitude, endLatitude, endLongitude) {
    var params = {
      // --- uncomment these when ready
      // start_latitude: startLatitude,
      // start_longitude: startLongitude,
      // end_latitude: endLatitude,
      // end_longitude: endLongitude
      start_latitude: 37.334381,
      start_longitude: -121.89432,
      end_latitude: 37.77703,
      end_longitude: -122.419571,
    };
    return $http.get('/uber/time', {params: params});
  };

  var getRideEstimate = function(productId, startLatitude, startLongitude, endLatitude, endLongitude) {
    var params = {
      // --- uncomment these when ready
      // product_id: productId,
      // start_latitude: startLatitude,
      // start_longitude: startLongitude,
      // end_latitude: endLatitude,
      // end_longitude: endLongitude
      product_id: 'c9b74e41-816c-4df8-8290-41fc1df9476c', // need to get this from getProducts
      start_latitude: 37.334381,
      start_longitude: -121.89432,
      end_latitude: 37.77703,
      end_longitude: -122.419571,
    };
    return $http.post('/uber/requests/estimate', {params: params});
  };

  var requestRide = function(productId, startLatitude, startLongitude, endLatitude, endLongitude) {
    var params = {
      // --- uncomment these when ready
      // product_id: productId,
      // start_latitude: startLatitude,
      // start_longitude: startLongitude,
      // end_latitude: endLatitude,
      // end_longitude: endLongitude
      product_id: 'c9b74e41-816c-4df8-8290-41fc1df9476c', // need to get this from getProducts
      start_latitude: 37.334381,
      start_longitude: -121.89432,
      end_latitude: 37.77703,
      end_longitude: -122.419571,
    };
    return $http.post('/uber/requests', {params: params});
  };

  var cancelRide = function(requestId) {
    var params = {
      request_id: requestId
    };
    return $http.delete('/uber/requests/', {params: params});
  };

  var getRideDetails = function(requestId) {
    var params = {
      request_id: requestId
    };
    return $http.get('/uber/requests/details', {params: params});
  };

  var getRideMap = function(requestId) {
    var params = {
      request_id: requestId
    };
    return $http.get('/uber/requests/map', {params: params});
  };

  var getRideReceipt = function(requestId) {
    var params = {
      request_id: requestId
    };
    return $http.get('/uber/requests/receipt', {params: params});
  };

  return {
    // signin: signin,
    isAuth: isAuth,
    getProducts: getProducts,
    getPriceEstimates: getPriceEstimates,
    getTimeEstimates: getTimeEstimates,
    getRideEstimate: getRideEstimate,
    requestRide: requestRide,
    cancelRide: cancelRide,
    getRideDetails: getRideDetails,
    getRideMap: getRideMap,
    getRideReceipt: getRideReceipt
  };
});