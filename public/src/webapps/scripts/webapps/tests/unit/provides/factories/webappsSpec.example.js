/**
 * Created by apps-libX on November 3rd 2015, 4:22:57 am.
 *
 * @module test.appsLibX.webapps
 * @name webapps
 *
 * @description
 * Tests for webapps under appsLibX.webapps
 * _Test description._
 */


describe('Service: appsLibX.webapps.webapps', function () {

    'use strict';

    // load the service's module
    beforeEach(module('appsLibX.webapps'));

    // instantiate service
    var service;

    //update the injection
    beforeEach(inject(function (webapps) {
        service = webapps;
    }));

    /**
     * @description
     * Sample test case to check if the service is injected properly
     * */
    it('should be injected and defined', function () {
        expect(service).toBeDefined();
    });
});
