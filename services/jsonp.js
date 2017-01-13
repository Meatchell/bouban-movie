/**
 * Created by Administrator on 2017/1/13.
 */
(function(angular){

    var app = angular.module('moviecat.http_jsonp',[]);
    app.service('myHttp',['$window',function($window){
        this.jsonp = function(url, arg, fn){
            var queryString = '';
            for(var key in arg){
                queryString += key + '=' + arg[key] + '&';
            }
            url += '?' + queryString;
            var callbackName = 'jsonp_' + Math.random().toString().substr(2);

            $window[callbackName] = function(data){
                fn(data);
                //$window.document.body.removeChild(scriptElement);
            }
            url += 'callback=' + callbackName;

            var scriptElement = $window.document.createElement('script');
            scriptElement.src = url;

            $window.document.body.appendChild(scriptElement);

        };
    }])
})(angular)