var app=angular.module("app",["ctrl","ngRoute","ngSanitize"]);
app.config(["$routeProvider",function ($r) {
    $r.when("/",{
        templateUrl:"tpls/list.html",
        controller:"list"
    }).when("/show/:id",{
        templateUrl:"tpls/show.html",
        controller:"show"
    }).when("/zhuti/:id",{
        templateUrl:"tpls/list.html",
        controller:"zhuti"
    })
}]);

