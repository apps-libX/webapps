/**
 * Created by apps-libX on November 3rd 2015, 4:22:57 am.
 */

webapps.config([
    '$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

        'use strict';

        // $urlRouterProvider.otherwise('/');

        $stateProvider
            //.state('main', {
            //    url         : '/',
            //    templateUrl : '/webapps'
            //})
            .state('webapps', {
                url         : '/webapps',
                templateUrl : '/webapps'
            });
            //.state('webappsDashboard.webapps', {
            //    url         : '/dashboard/webapps',
            //    templateUrl : '/dashboard/webapps'
            //});
    }
]);