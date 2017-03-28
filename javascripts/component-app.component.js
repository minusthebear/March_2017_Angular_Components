(function(){
	"use strict";

	angular.module("app").component("componentApp", {
		templateUrl: "/templates/component-app.component.html",
		$routeConfig: [
			{ path: "/Users", name: "Users", component: "usersComponent" },
			{ path: "/Home", name: "Home", component: "homeComponent"},
			{ path: "/Profile/:id", name: "Profile", component: "profileComponent" },
			{ path: "/**", redirectTo: ["Users"]}
		],
		controller: function(){
			this.$routerOnActivate = function(next, previous){
				console.log("Next: " + next + ", Previous: " + previous);
			}
		}
	});
})();