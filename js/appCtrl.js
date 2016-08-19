(function () {
	'use strict';
	angular.module('RatingModule')
		.controller('appCtrl', function ($timeout) {
			var ctrl = this;
			ctrl.number = 3;
			$timeout(function(){
				ctrl.number += 1;
			},2000);

		});
})();