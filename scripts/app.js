'use strict';

/* App Module */

var appSeed = angular.module('appSeed',
                    ['ui.bootstrap', 
                     'ngRoute', 
                     'ngCookies', 
                     'ngSanitize',
                     'appSeedDirectives', 
                     'appSeedControllers', 
                     'appSeedServices',
                     'appSeedFilters',
                     'd2Services',
                     'd2Controllers',
                     'pascalprecht.translate',
                     'd2HeaderBar'])
              
.value('DHIS2URL', '../'+dhis2.settings.baseUrl)

.config(function($translateProvider,$routeProvider) {
	
	$routeProvider.when('/', {
        templateUrl: 'views/home.html',
        controller: 'MainController'
    }).when('/dataElements', {
        templateUrl: 'views/metadata-list.html',
        controller: 'dataElementsController'
    }).when('/indicators', {
        templateUrl: 'views/metadata-list.html',
        controller: 'indicatorsController'
    }).when('/DataSets', {
        templateUrl: 'views/metadata-list.html',
        controller: 'DataSetsController'
    }).otherwise({
        redirectTo : '/'
    });
     
    $translateProvider.preferredLanguage('en');
    $translateProvider.useSanitizeValueStrategy('escaped');
    $translateProvider.useLoader('i18nLoader');
});