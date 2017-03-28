(function(){
	"use strict";

	angular.module("app").component("profileComponent", {
		templateUrl: "/templates/profile.component.html"
		/*
		controller: function(){
			const vm = this;

			vm.$routerOnActivate = function(next){
				console.log(next);
				vm.id = next.params.id;
			}
		}
		*/
	});
})();