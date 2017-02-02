/* global angular */


//code

'use strict';

/* Services */

var appSeedServices = angular.module('appSeedServices', ['ngResource']);

appSeedServices.factory('dataElement', ['$http', '$q', function ($http, $q) {
        var dataElementMgr = {
            //var url ='https://dhis.cc.ac.mw/dhis/api/dataElements.json?fields=name,id';

            listAllMetadata: function (apiResource) {
                var url = 'https://dhis.cc.ac.mw/dhis/api/'+apiResource+'.json?fields=name,id&paging=false' ;
                console.log("proflie metadata "+url);
                
                //promise to get all the metadata??
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
                var url = 'https://dhis.cc.ac.mw/dhis/api/'+apiResource+'/'+id+'.json?fields=:allpaging=false' ;
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
        
        return dataElementMgr;



    }]);

