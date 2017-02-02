/* global angular */


//code

'use strict';

/**
 * Function will retrieve the root URL for domain it's running on.
 *
 * @returns {string} : the currently root hostname
 */
function getHostRoot() {

    //return location.protocol + '//' + location.hostname;
    return location.protocol + '//' + location.hostname + ':' + location.port;
}

/**
 * Function will return the subfolder name for the DHIS installation on the server
 * which is varies from DHIS installation to installation.
 */
function getDHISInstallFolder() {
    var pathArray = window.location.pathname.split('/');
    //console.log(pathArray[1]);
    var pathName = pathArray[1];
    //console.log(pathName);
    if (pathName == 'apps') {
        pathName = '';
    }
    return pathName;
}

function getApiRoot() {
    console.log(getHostRoot() + '/' + getDHISInstallFolder());
    return getHostRoot() + '/' + getDHISInstallFolder();
}


/* Services */

var appSeedServices = angular.module('appSeedServices', ['ngResource']);

appSeedServices.factory('dataElement', ['$http', '$q', function ($http, $q) {
        var dataElementMgr = {
            //var url ='https://dhis.cc.ac.mw/dhis/api/dataElements.json?fields=name,id';

            listAllMetadata: function (apiResource) {
                var url = getApiRoot()+'/api/'+apiResource+'.json?fields=name,id&paging=false' ;
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
                var url = getApiRoot()+'/api/'+apiResource+'/'+id+'.json?fields=:allpaging=false' ;
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

