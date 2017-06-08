app.directive('keepDirective', keepDirective);
function keepDirective(){
    return{
        restrict : 'E',
        template : "<li ng-style='{background : task.backgColor}' ><div id='options' ng-show='displayOptions==$index'><span id='edit' data-toggle='modal' ng-click='editTask($index)' data-target='#myModal'><a href=''><i class='fa fa-pencil-square-o' aria-hidden='true'></i></a></span><span id='delete' ng-click='deleteTask($index)'><a href=''><i class='fa fa-trash-o' aria-hidden='true'></i></a></span></div><h2>{{task.title}}</h2><p>{{task.description}}</p></li>"
    }
}

app.directive('modalDirective' , modalDirective);
function modalDirective(){
    return{
        restrict : 'E',
        template : "<div class='modal fade' id='myModal' role='dialog'><div class='modal-dialog modal-sm'><div class='modal-content' ng-style='{background : task.backgColor}'><div class='modal-header'><button type='button' class='close' data-dismiss='modal'>&times;</button><h4 class='modal-title'><input type='text' ng-model='task.title' ng-value='task.title'></h4></div><div class='modal-body'><p><textarea ng-model='task.description'>{{task.description}}</textarea></p></div><div class='modal-footer'><button type='button' ng-click='update()' class='btn btn-default' data-dismiss='modal'>Done</button></div></div></div></div>"
    }
}