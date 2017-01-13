/**
 * Created by Administrator on 2017/1/12.
 */

(function(angular){
    angular = window.angular;
    var app = angular.module('moviecat.in_theaters',['ngRoute','moviecat.http_jsonp']);

    //����·��
    app.config(['$routeProvider',function($routeProvider){
        $routeProvider.when('/in_theaters',{
            templateUrl:'in_theaters/view.html',
            controller:'in_theaters'
        })
    }])

    ////����������
    app.controller('in_theaters',function($scope,$http,$routeParams,$route,myHttp){
        $scope.pageSize = 10;
        $scope.newPage = ($routeParams.page || '1') - 0;

        var start = ($scope.newPage - 1)*$scope.pageSize;
        myHttp.jsonp('http://api.douban.com/v2/movie/in_theaters',
            {start:start,count:$scope.pageSize},
            function(info){
            console.log(start,$scope.pageSize)
            $scope.data = info
            $scope.$apply();
            console.log(info)
        })

    })

})(angular)