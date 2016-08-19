(function () {
    'use strict';
    function RatingCtrl($scope) {
        var ctrl = this;

        ctrl.stars = [];
        for (var i = 0; i < parseInt(ctrl.maxStars); i++) {
            ctrl.stars.push(
                { selected: false }
            );
        }

        ctrl.fill = function (index) {
            for (var i = 0; i < ctrl.stars.length; i++) {
                if (i <= index) {
                    ctrl.stars[i].selected = true;
                    ctrl.ngModel = index + 1;

                }
                else {
                    ctrl.stars[i].selected = false;
                }
            }
        }

        ctrl.fillDefault = function () {
            for (var i = 0; i < ctrl.stars.length; i++) {
                if (i < ctrl.ngModel) {
                    ctrl.stars[i].selected = true;
                }
                else {
                    ctrl.stars[i].selected = false;
                }
            }
        }
        ctrl.fillDefault();

        ctrl.$onInit = function () {
            ctrl.ngModelCtrl.$formatters.push(function (value) {
                if (value) {
                    // console.log(value);
                    // console.log(ctrl.ngModel)

                    // for (var i = 0; i < ctrl.stars.length; i++) {
                    //     if (i < value) {
                    //         ctrl.stars[i].selected = true;
                    //     }
                    //     else {
                    //         ctrl.stars[i].selected = false;
                    //     }
                    // }
                    //ctrl.ngModel = value;
                    //ctrl.fillDefault();
                    //console.log('$ctrl.ngModel :' + ctrl.ngModel);
                    //console.log('value (ctrl.number) : ' + value);
                    return value;


                }
            });
            ctrl.ngModelCtrl.$parsers.push(function (value) {
                console.log('$ctrl.ngModel :' + ctrl.ngModel);
                console.log('value (ctrl.number) : ' + value);
                return value;
            });
        }


        // ctrl.$onInit = function () {
        //     ctrl.ngModel.$viewChangeListeners.push(onChange);
        //     ctrl.ngModel.$render = onChange;

        // };
        // ctrl.fillAgain = function (modelValue) {
        //       for (var i = 0; i < ctrl.stars.length; i++) {
        //         if (i < modelValue) {
        //             ctrl.stars[i].selected = true;
        //         }
        //         else {
        //             ctrl.stars[i].selected = false;
        //         }
        //     }
        // }
        // function onChange() {
        //     ctrl.modelValue = ctrl.ngModel.$modelValue;
        //     ctrl.fillAgain(ctrl.modelValue);
        // }

    }

    angular.module('RatingModule').component('starRating', {
        templateUrl: 'templates/rating.html',
        controller: RatingCtrl,
        require: {
            ngModelCtrl: 'ngModel'
        },
        bindings: {
            maxStars: '=',
            ngModel: '='
        }
    });
})();
