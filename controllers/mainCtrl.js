"use strict";
app.controller('mainCtrl', ['$scope','$http','$location','$timeout', function($scope,$http,$location,$timeout) {
    $scope.hi = "hi";
    $http({
        method: 'GET',
        url: 'https://still-scrubland-9880.herokuapp.com/bill.json'
    }).then(function successCallback(res) {
        $scope.bill = res;
        $scope.due = $scope.bill.data.statement.due;
        $scope.from = $scope.bill.data.statement.period.from;
        $scope.to = $scope.bill.data.statement.period.to;
        $scope.generated = $scope.bill.data.statement.generated;
        $scope.subs = $scope.bill.data.package.subscriptions;
        $scope.subsTotal = $scope.bill.data.package.total;
        $scope.calls = $scope.bill.data.callCharges.calls;
        $scope.callsTotal = $scope.bill.data.callCharges.total;
        $scope.rentals = $scope.bill.data.skyStore.rentals;
        $scope.skyStoreTotal = $scope.bill.data.skyStore.total;
        $scope.buyAndKeep = $scope.bill.data.skyStore.buyAndKeep;
    }, function errorCallback(res) {
        $location.url('/404');
    });

    $scope.user = {};
    $scope.loginUser=function()
    {
        var username=$scope.user.name;
        var password=$scope.user.password;
        if(username=="admin" && password=="admin123")
        {
            $location.path( "/bill" );
        }
        else
        {
            $scope.message="Please enter your username and password to continue to your account";
            $timeout(function () { $scope.message = ""; }, 3000);
        }
    }

}]);