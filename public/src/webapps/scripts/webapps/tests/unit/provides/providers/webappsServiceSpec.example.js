/**
 * Created by apps-libX on November 3rd 2015, 4:22:57 am.
 *
 * @module test.appsLibX.webapps
 * @name webappsService
 *
 * @description
 * Tests for webappsService under appsLibX.webapps
 * _Test description._
 */


describe('Service: appsLibX.webapps.webappsService', function () {

    'use strict';

    // load the service's module
    beforeEach(module('appsLibX.webapps'));

    // instantiate service
    var service;

    //update the injection
    beforeEach(inject(function (webappsService) {
        service = webappsService;
    }));

    /**
     * @description
     * Sample test case to check if the service is injected properly
     * */
    it('should be injected and defined', function () {
        expect(service).toBeDefined();
    });
});
