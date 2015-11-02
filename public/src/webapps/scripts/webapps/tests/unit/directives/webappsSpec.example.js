/**
 * Created by apps-libX on November 3rd 2015, 4:22:57 am.
 *
 * @module test.appsLibX.webapps
 * @name webapps

 * @description
 * Tests for webapps under appsLibX.webapps
 * _Test description._
 */


describe('Directive: appsLibX.webapps.webapps', function () {

    'use strict';

    var ele, scope;

    beforeEach(module('appsLibX.webapps'));
    beforeEach(inject(function ($compile, $rootScope) {
        scope = $rootScope.$new();

        //update the line below!
        ele = angular.element('<Replace with directive>');
        //update the above line if you haven't!
        $compile(ele)(scope);
        scope.$apply();
    }));

    /**
     * @description
     * Sample test case to check if HTML rendered by the directive is non empty
     * */
    it('should not render empty html', function () {
        scope.$apply(function () {

            /**
             * Set the scope properties here.
             * scope.desc = 'test hostname';
             * scope.status = 'valid';
             *
             */
        });
        expect(ele.html()).not.toBe('');
    });
});
