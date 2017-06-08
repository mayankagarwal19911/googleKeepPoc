app.controller('loginController', loginController);

    function loginController($scope, $location){
        $scope.goTo= function(){
            $location.path('/googlekeep');
        }


    }