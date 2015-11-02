/**
 * Created by apps-libX on November 3rd 2015, 4:22:57 am.
 *
 * @module test.appsLibX.webapps
 * @name WebappsController
 *
 * @description
 * Tests for WebappsController under appsLibX.webapps
 * _Test description._
 */


describe('Controller: appsLibX.webapps.WebappsController', function () {

    'use strict';

    // load the controller's module
    beforeEach(module('appsLibX.webapps'));

    var ctrl,
        scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        ctrl = $controller('WebappsController', {
            $scope : scope
        });
    }));

    it('should be defined', function () {
        expect(ctrl).toBeDefined();
    });
});
