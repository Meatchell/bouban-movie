/**
 * Created by Administrator on 2017/1/14.
 */
(function(angular){
    var app = angular.module('moviecat.auto_active',[]);

    app.directive('autoActive',['$location',function($location){
        return {
            link:function(scope,element,attribute){
                scope.location = $location;
                scope.$watch('location.url()',function(newVal,oldVal){
                    var a = element.children();
                    var hash = a[0].hash.substr(2);
                    if(newVal.startsWith(hash)){
                        element.parent().children().removeClass('active')
                        element.addClass('active');
                    }
                })
            }
        }
    }])
})(angular)