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
    }).otherwise({
        redirectTo : '/'
    });
     
    $translateProvider.preferredLanguage('en');
    $translateProvider.useSanitizeValueStrategy('escaped');
    $translateProvider.useLoader('i18nLoader');
});
