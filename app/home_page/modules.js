/**
 * Created by Administrator on 2017/1/12.
 */
(function(angular){
    angular = window.angular;
    var app = angular.module('moviecat.home_page',['ngRoute']);
    app.config(['$routeProvider',function($routeProvider){
        $routeProvider.when('/home_page',{templateUrl:'/view.html'})
    }])
})(angular)