'use strict';
angular.module('todoApp')
.factory('todoListSvc', ['$http', function ($http) {

    $http.defaults.useXDomain = true;
    delete $http.defaults.headers.common['X-Requested-With']; 

    return {
        getItems : function(){
            return $http.get(apiEndpoint + '/api/Todo');
        },
        getItem : function(id){
            return $http.get(apiEndpoint + '/api/Todo/' + id);
        },
        postItem : function(item){
            return $http.post(apiEndpoint + '/api/Todo', item);
        },
        putItem : function(item){
            return $http.put(apiEndpoint + '/api/Todo/' + item.id, item);
        },
        deleteItem : function(id){
            return $http({
                method: 'DELETE',
                url: apiEndpoint + '/api/Todo/' + id
            });
        },
        postKrpbfe : function(item){
            // var deferred = $http.defer();

            // return $http.post(krpbfeEndpoint + '/length', item);
            return fetch(krpbfeEndpoint + '/length', {
                method: 'POST',
                body: JSON.stringify(item),
                headers: {
                    'Content-Type': 'application/json',
                    'Content-Length': 64
                }
            })

            // return deferred.promise;
        },
        postKrpbfeCloseConnection : function(item){

            return fetch(krpbfeEndpoint + '/closeconnection', {
                method: 'POST',
                body: JSON.stringify(item),
                headers: {
                    'Content-Type': 'application/json',
                    'Content-Length': 0,
                }
            })
        }
    };
}]);