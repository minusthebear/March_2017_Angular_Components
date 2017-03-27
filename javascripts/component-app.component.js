(function(){
	"use strict";

	angular.module("app").component("componentApp", {
		templateUrl: "/templates/component-app.component.html",
		$routeConfig: [
			{ path: "/Users", name: "Users", component: "usersComponent" },
			{ path: "/Home", name: "Home", component: "homeComponent"},
			{ path: "/**", redirectTo: ["Users"]}
		]
	});
})();