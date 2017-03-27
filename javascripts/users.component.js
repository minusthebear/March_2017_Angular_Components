(function(){
	"use strict";

	angular.module("app").component("usersComponent", {
		//template: "<h3>Guess what? It works!</h3>",
		templateUrl: "/templates/users.component.html",
		controllerAs: "vm",
		controller: ["$http", "UsersService", controller]
	});

	function controller($http, UsersService){
		const vm = this;

		vm.testing = "Hello Cruel World!";

		vm.$onInit = function(){
			vm.users = UsersService.all();
		}
	}
})();