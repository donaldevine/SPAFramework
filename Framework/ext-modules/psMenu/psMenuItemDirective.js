"use strict";

angular.module('psMenu').directive('psMenuItem', function () {
    return {
        require: '^psMenu',
        scope: {
            label: '@',
            icon: '@'
        },
        templateUrl: 'ext-modules/psMenu/psMenuItemTemplate.html',
        link: function (scope, el, attr, ctrl) {
        }
    };
});