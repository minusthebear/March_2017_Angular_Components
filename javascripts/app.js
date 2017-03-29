(function(){
	"use strict";

	const app = angular.module("app", ["ui.router"]);

	app.config(function($urlRouterProvider, $locationProvider, $stateProvider, $qProvider) {
	    $locationProvider.html5Mode(true);
	    
	    /* 
	     * Uncomment line below during unit testing to handle $q.reject
	     * Comment line below during runtime
	     */
	    // $qProvider.errorOnUnhandledRejections(false);

	    $urlRouterProvider
	    	.when("", "/users")
	    	.when("/", "/users")
		    .otherwise(function($injector){
		    	$injector.get("$state").go("404", {}, { location: false})
		    });

	    $stateProvider
	    	.state("users", {
	    		url: "/users",
	    		component: "usersComponent"
	    	})
	      .state("profile", {
	        url: "/user/:id",
	        component: "profileComponent",
	        bindings: { 
	        	resolvedUser: "resolvedUser"
	        },
	        resolve: {
	          resolvedUser: ["UsersService", "$q", "$stateParams", function(UsersService, $q, $stateParams){
	            return UsersService.findById($stateParams.id).then(function(user){
	              return user;
	            }).catch(function(error){
	              return $q.reject(error);
	            });
	          }]
	        }
	      }) 
	      .state("404", {
	        url: "/404",
	    		component: "fourOFour"
	      });
	  });
})();