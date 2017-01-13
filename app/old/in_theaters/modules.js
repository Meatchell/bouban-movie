/**
 * Created by Administrator on 2017/1/12.
 */

(function(angular){
    angular = window.angular;
    var app = angular.module('moviecat.in_theaters',['ngRoute','moviecat.http_jsonp']);

    //配置路由
    app.config(['$routeProvider',function($routeProvider){
        $routeProvider.when('/:movieType/:page?',{
            templateUrl:'/view.html',
            controller:'in_theaters'
        })
    }])

    ////创建控制器
    app.controller('in_theaters',function($scope,$http,$routeParams,$route,myHttp){
        $scope.pageSize = 10;
        $scope.nowPage = ($routeParams.page || '1') - 0;

        var start = ($scope.nowPage - 1)*$scope.pageSize;
        myHttp.jsonp('http://api.douban.com/v2/movie/' + $routeParams.movieType,
            {start:start,count:$scope.pageSize},
            function(info){
            $scope.total = info.total;
            $scope.totalPage = Math.ceil(info.total/$scope.pageSize)
            $scope.data = info
            $scope.$apply();
            console.log(info)
        });

        $scope.goPage = function(newPage){
            if(newPage < 1 || newPage > $scope.totalPage){
                return;
            }
            $route.updateParams({page:newPage})
        }

    })

})(angular)