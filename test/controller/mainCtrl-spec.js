describe('Main Controller', function() {
    beforeEach(module('billApp'));
    var controller, scope;

    beforeEach(inject(function($controller, $rootScope){
        scope = $rootScope.$new();
        controller = $controller('mainCtrl', {
            $scope: scope
        });
    }));

    describe('Main Controller Tests', function() {
        it('sets variables ', function() {
            expect(scope.loginUser).toBeDefined();
            $scope.loginUser();
            expect($scope.username).toEqual($scope.user.name);
        });



    });
});

