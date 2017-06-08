app.controller('keepController', keepController);

function keepController($scope, $location, taskService){
    reload();
    $scope.hide = true;
    $scope.taskList=[];
    $scope.task="";
    var index;
    $scope.displayOptions=-1;
    $scope.colors=['#ff8a80','#ffd180','#ffff8d','#cfd8dc','#80d8ff','#a7ffeb','#ccff90'];
    $scope.bckgColor="";

    $scope.addTask = function(){
       if(($scope.title==="" && $scope.description==="") || ($scope.title===undefined && $scope.description===undefined)){
        alert("please enter something to create task list");
       }
       else{
        $scope.bckgColor = $scope.colors[Math.floor(Math.random() * $scope.colors.length)];
        taskService.addTask({title : $scope.title, description : $scope.description, backgColor : $scope.bckgColor});
        $scope.title="";
        $scope.description="";
        $scope.hide = true;
        reload();
       }
    }// addTask()

    //getTask
    function reload(){
        $scope.taskList = taskService.getTask();
    }

    //deleteTask
    $scope.deleteTask = function(index){
        var r = confirm("Surely wanna delete task ?");
        if(r){
            taskService.deleteTask(index);
        }
        else{}
        $scope.displayOptions=-1;
        reload();
    }

    //edit task
    $scope.editTask = function(id){
        //$location.path('edit/'+index);
        index=id;
        $scope.task = taskService.getTask()[id];
        $scope.bckgColor = $scope.task.backgColor;
    }

    $scope.update = function(){
         obj = {
            title : $scope.task.title, 
            description : $scope.task.description,
            backgColor : $scope.task.backgColor               
         }
         taskService.updateTask(index,obj);
         reload();
    }

    $scope.showOptions = function(index){        
        $scope.displayOptions=index;
    }

    $scope.hideOptions = function(){
        $scope.displayOptions=-1;
    }

}