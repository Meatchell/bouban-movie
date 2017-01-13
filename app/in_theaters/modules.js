/**
 * Created by Administrator on 2017/1/12.
 */

(function(angular){
    angular = window.angular;
    var app = angular.module('moviecat.in_theaters',['ngRoute','moviecat.http_jsonp']);

    //配置路由
    app.config(['$routeProvider',function($routeProvider){
        $routeProvider.when('/in_theaters',{
            templateUrl:'in_theaters/view.html',
            controller:'in_theaters'
        })
    }])

    ////创建控制器
    app.controller('in_theaters',function($scope,$http,$routeParams,$route,myHttp){
        //$http.get('http://api.douban.com/v2/movie/in_theaters').then(function(res){
        $http.get('in_theaters/in_theaters.json')
            .then(function(res){
                console.log(res)
                $scope.data  = res.data;
        },function(){
            console.log('error')
        })

        /////////////////////

        //$scope.pageSize = 10;
        //$scope.newPage = ($routeParams.page || '1') - 0;
        //
        //var start = ($scope.nowPage - 1)*$scope.pageSize;

    })

})(angular)