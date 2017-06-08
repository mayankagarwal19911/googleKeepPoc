app.controller('registerController', keepController);

function keepController($scope, $location){
    $scope.userRegister= function(isValid){
        if(isValid) $location.path('/login');
    }
}
