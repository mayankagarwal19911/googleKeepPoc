app.controller('editController', editController);

function editController($scope, $routeParams, taskService){         
    $scope.task = taskService.getTask()[$routeParams.id];

    //console.log("console", $scope.id);

    $scope.editTask = function(){
        console.log($routeParams.id);
        console.log()
       // console.log($scope.task.title, $scope.task.description);
       //taskService.updateTask();
       // angular.copy($scope.task.title[$scope.id], $$scope.task.description[$scope.id]);
        //console.log($scope.task.title, $scope.task.description);
    }
}