/* global angular */


//code

'use strict';

/* Services */

var appSeedServices = angular.module('appSeedServices', ['ngResource']);

appSeedServices.factory('dataElement', ['$http', '$q', function ($http, $q) {
        var dataElementMgr = {
            //var url ='https://dhis.cc.ac.mw/dhis/api/dataElements.json?fields=name,id';

            listAllMetadata: function (apiResource) {
                var url = 'https://dhis.cc.ac.mw/dhis/api/'+apiResource+'.json?fields=name,id' ;
                console.log("proflie metadata "+url);
                var def = $q.defer();
                $http.get(url)
                    .success(function (res) {
                        def.resolve(res);
                    }).error(function (err, status) {
                    def.reject(err);
                });
                return def.promise;
            }
            ,
            specificMetadata: function (apiResource, id) {
                var url = 'https://dhis.cc.ac.mw/dhis/api/'+apiResource+'/'+id+'.json?fields=:all' ;
                console.log("proflie metadata "+url);
                var def = $q.defer();
                $http.get(url)
                    .success(function (res) {
                        def.resolve(res);
                    }).error(function (err, status) {
                    def.reject(err);
                });
                return def.promise;

            }
        };
        console.log(JSON.stringify(dataElementMgr));
        return dataElementMgr;



    }]);

