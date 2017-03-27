(function(){
	"use strict";

	angular.module("app")
		.factory("ImageService", function($http){
			var pokemonAPI = "http://pokeapi.co/api/v2/pokemon/";
			var image = {};

			image.findByName = function(name) {
				return $http.get(pokemonAPI + name).then(function(res){
						return res.data;
					}).catch(function(res){
						return res.data;
					});
			};
				
			return image;
		});
})();