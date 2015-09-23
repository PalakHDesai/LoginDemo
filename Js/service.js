/// <reference path="../bower_components/angular/angular.js" />

angular.module('FirstService', []).factory('login', function() {
    return {
        CheckData :function (username,password)
        {
        debugger;
        var response;
        if (username == "nosql" && password == "html5") {
            response = true;
        } else {
            response = false;
        }
        return response;
    }
}
     
});
