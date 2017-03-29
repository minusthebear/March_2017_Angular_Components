(function(){
	"use strict";

	angular.module("app").component("profileComponent", {
		templateUrl: "/templates/profile.component.html",
		controllerAs: "vm",
		bindings: {
			resolvedUser: "<"
		},
		controller: function(ImageService, $state){
			const vm = this;
			const resolvedUser = this.resolvedUser;
			
			resolvedUser ? vm.user = resolvedUser : $state.go("404");

			vm.$onInit = function(){
				ImageService.findByName(vm.user.pokemon.name)
					.then(function(res){
						vm.user.pokemon.id = res.id;
						vm.user.pokemon.image = res.sprites.front_default;
						vm.user.pokemon.type = res.types[0].type.name;
					})
					.catch(function(res){
						vm.user.pokemon.image = "https://www.native-instruments.com/forum/data/avatars/m/328/328352.jpg?1439377390";
					});
			}
			
		}
	});
})();