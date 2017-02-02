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
            'd2HeaderBar',
            'angularUtils.directives.dirPagination'
        ])

        .value('DHIS2URL', '../' + dhis2.settings.baseUrl)

        .config(function ($translateProvider, $routeProvider) {

            $routeProvider.when('/', {
                templateUrl: 'views/home.html',
                controller: 'MainController'
            }).when('/dataElements', {
                templateUrl: 'views/metadata-list.html',
                controller: 'dataElementsController'
            }).when('/indicators', {
                templateUrl: 'views/metadata-list.html',
                controller: 'indicatorsController'
            }).when('/dataSets', {
                templateUrl: 'views/metadata-list.html',
                controller: 'DataSetsController'
            }).when('/dataSets/:id', {
                templateUrl: 'views/metadata-list.html',
                controller: 'DataSetsController'
            }).when('/indicators/:id', {
                templateUrl: 'views/metadata-list.html',
                controller: 'indicatorsController'
            }).when('/dataElements/:id', {
                templateUrl: 'views/metadata-list.html',
                controller: 'dataElementsController'
            }).when('/programs', {
                templateUrl: 'views/metadata-list.html',
                controller: 'programsController'
            }).when('/programs/:id', {
                templateUrl: 'views/metadata-list.html',
                controller: 'programsController'
            }).when('/organisationUnits', {
                templateUrl: 'views/metadata-list.html',
                controller: 'organisationUnitsController'
            }).when('/organisationUnits/:id', {
                templateUrl: 'views/metadata-list.html',
                controller: 'organisationUnitsController'
            }).otherwise({
                redirectTo: '/'
            });

            $translateProvider.preferredLanguage('en');
            $translateProvider.useSanitizeValueStrategy('escaped');
            $translateProvider.useLoader('i18nLoader');
        });
