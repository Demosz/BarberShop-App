app.factory('counter', ['$http', function($http){
    var demCounter = $http.get('https://api.myjson.com/bins/61lhb')
    .then(function(response) {
        return response
    });
    return demCounter;
    }]);