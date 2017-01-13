/**
 * Created by Administrator on 2017/1/12.
 */
(function(angular){
    angular = window.angular;
    var app = angular.module('moviecat.top250',['ngRoute']);
    app.config(['$routeProvider',function($routeProvider){
        $routeProvider.when('/top250',{templateUrl:'/view.html'})
    }])
})(angular)