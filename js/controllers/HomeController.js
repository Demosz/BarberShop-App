app.controller('HomeController', [
    '$scope',
    '$http', 
    'counter', 
    '$window',
    function($scope, $http, counter, $window) {

    $scope.welcome = "Hey! Here's the current barbershop counter!";
    counter.then(function(response) {
        $scope.counter = response.data;
    });

    $scope.date = new Date();

    $scope.addUpdate = function() {

        //if input empty, don't submit
        if(!$scope.update || $scope.update === "" || !parseInt($scope.update) == 'number') {
        return;
        }

         
        //posts the counter update
        $http.put('https://api.myjson.com/bins/61lhb', {
            "shop_counter": $scope.update,
            "shop_update_time": $scope.date
        })
                     
        //after submit, clear input
        $scope.update = '';
        setTimeout(() => {
            $window.location.reload();
        }, 2000);
        }

}]);

function newFunction($scope) {
    return $scope.date = new date();
}
