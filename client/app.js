var app = angular.module('keepApp',['ngRoute', 'ngAnimate']);
    app.config(config);

function config($routeProvider){
    $routeProvider
        .when('/' ,{
            templateUrl :'template/register.html',
            controller : 'registerController'
        })
        .when('/login' ,{
            templateUrl : 'template/login.html',
            controller : 'loginController'
        })
        .when('/googlekeep' ,{
            templateUrl : 'template/index.html',
            controller : 'keepController'
        })
        .when('/edit/:id' ,{
            templateUrl : 'template/edit.html',
            controller : 'editController'
        })
        .otherwise('' ,{
            templateurl : '',
            controller : ''
        })
}
