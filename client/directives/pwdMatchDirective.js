app.directive('pwdMatch', passwordMatch);

function passwordMatch(){
    return {
        restrict : 'A',
        template : "<h2>I am in password directive</h2>"
    }
}