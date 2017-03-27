(function(){
	"use strict";

	angular.module("app").component("usersComponent", {
		//template: "<h3>Guess what? It works!</h3>",
		templateUrl: "/templates/users.component.html",
		controllerAs: "vm",
		controller: ["$http", controller]
	});

	function controller($http){
		const vm = this;

		vm.testing = "Hello Cruel World!";

		vm.$onInit = function(){
		}
	}
})();