/**
 * Created by Administrator on 2017/1/12.
 */
(function(angular){
    angular = window.angular;
    var app = angular.module('moviecat.comming_soon',['ngRoute']);
    app.config(['$routeProvider',function($routeProvider){
        $routeProvider.when('/comming_soon',{templateUrl:'/view.html'})
    }])
})(angular)