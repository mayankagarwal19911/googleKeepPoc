app.service('taskService', taskService);

function taskService(){
    this.task = [];

    this.addTask = function(keepTask){
         this.task.push(keepTask);
    }
    this.getTask = function(){
        return this.task;
    }
    this.deleteTask = function(index){
        this.task.splice(index, 1);
    }
    this.updateTask = function(index, obj){
        this.task[index] = obj;
    }
}