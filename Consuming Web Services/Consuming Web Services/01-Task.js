/// <reference path="D:\ПРОГРАМИСТ\JS Applications\WebApplication1\WebApplication1\Libs/q.js" />
function main() {
    var url = 'http://ip.jsontest.com/';
    httpRequest.getJSON(url)
        .then(
           function (succes) {
               console.log(succes);
        }, function (error) {
            // If there's an error or a non-200 status code, log the error.
            console.error(error);
            }
        );
    
    
}

var httpRequest = (function () {

    var get = function (url) {
        var request = new XMLHttpRequest();
        var deferred = Q.defer();

        request.onreadystatechange = function () {
            if (request.readyState === 4) {
                if (request.status === 200){
                    deferred.resolve(JSON.parse(request.responseText));
                } else {
                    deferred.reject(JSON.parse(request.responseText));
                }
            }  
        };

        request.open("GET", url, true);
        request.setRequestHeader("Content-type", "application/JSON");
        request.send(null);
        return deferred.promise;
    };

    var post = function (url, data) {
        var request = new XMLHttpRequest();
        var deferred = Q.defer();

        request.onreadystatechange = function () {
            if (request.readyState === 4) {
                if (request.status === 200) {
                    deferred.resolve(JSON.parse(request.responseText));
                } else {
                    deferred.reject(JSON.parse(request.responseText));
                }
            }
        };

        request.open("POST", url, true);
        request.setRequestHeader("Content-type", "application/JSON");
        request.send(data);
        return deferred.promise;
    };

    return {
        getJSON: get,
        postJSON: post
    };
})();