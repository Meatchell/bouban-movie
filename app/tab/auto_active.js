/**
 * Created by Administrator on 2017/1/14.
 */
(function(angular){
    var app = angular.module('moviecat.atuo_active',['moviecat.movie_list',
    'ngRoute'
    ]);
    app.controller('auto_active',function($scope,$routeParams){
        console.log($routeParams)
    })
})(angular)