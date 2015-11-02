/**
 * Created by apps-libX on November 3rd 2015, 4:22:57 am.
 */

// webapps
angular.module('appsLibX.webapps').config(['$translateProvider', function ($translateProvider) {
    'use strict';
    $translateProvider.translations('id', {
        TITLE : 'Hallo',
        FOO   : 'Ini adalah paragraf.'
    });
    // $translateProvider.preferredLanguage('id');
}]);

//webapps
//  .controller('Ctrl', function ($scope, $translate) {
//      $scope.changeLanguage = function (key) {
//          $translate.use(key);
//      };
//  });

// <h1>{{ 'TITLE' | translate }}</h1>
// <p>{{ 'FOO' | translate }}</p>