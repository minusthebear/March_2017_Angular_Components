describe("profile.component", function(){
	var profileComponent, ImageService, $q, $httpBackend, $state, resolvedUser, jazzSpy, IS,
		API = "http://pokeapi.co/api/v2/pokemon/";

	var RESPONSE_SUCCESS = {
		'id': 251,
		'name': 'celebi',
		'sprites': {
	      'front_default': 'http://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/251.png'
	    },
	    'types': [{
	      'type': { 'name': 'grass' }
	    }]
	};

	var RESPONSE_ERROR = {
		"detail": "Not found."
	};

	beforeEach(angular.mock.module("app"));
	beforeEach(angular.mock.module("ui.router"));

	beforeEach(inject(function(_ImageService_, _$q_, _$httpBackend_, _$state_, _$rootScope_){
		ImageService = _ImageService_;
		$q = _$q_;
		$httpBackend = _$httpBackend_;
		$state = _$state_;
		$rootScope = _$rootScope_;
		$rootScope.$new();
	}));

	describe("profileComponent should exist", function(){
		var singleUser;

		beforeEach(inject(function(_$componentController_){
			singleUser = { id: 2, name: "Erlich Bachman", email: "erlich@aviato.com", phone: 4155552233, pokemon: { isPresent: true, name: "celebi"}, icon: { isPresent: false, name: null} };
			let bindings = {resolvedUser: singleUser, ImageService: ImageService, $state: $state };
			profileComponent = _$componentController_("profileComponent", { $scope: {} }, bindings);
		}));

		it("should be defined", function(){
			expect(profileComponent).toBeDefined();
		});

		describe("$onInit should initiaite", function(){

			it("$onInit should be defined", function(){
				expect(profileComponent.$onInit).toBeDefined();
			});	

		});

		describe("profileComponent with a valid user and valid Pokemon", function(){

			beforeEach(function(){
				spyOn(ImageService, "findByName").and.callThrough();

			});

			it("should set state to resolvedUser", function(){
				expect(profileComponent.user).toEqual(singleUser);
			});

			it("should expect ImageService to be defined", function(){
				expect(ImageService.findByName).toBeDefined();
			});

			it("should call ImageService.findByName() and return Pokemon icon", function(){

				expect(profileComponent.user.pokemon.id).toBeUndefined();
				expect(profileComponent.user.pokemon.name).toEqual("celebi");
				expect(profileComponent.user.pokemon.image).toBeUndefined();
				expect(profileComponent.user.pokemon.type).toBeUndefined();

				profileComponent.$onInit();

				$httpBackend.whenGET(API + "celebi").respond(200, $q.when(RESPONSE_SUCCESS));
				$httpBackend.flush();

				expect(ImageService.findByName).toHaveBeenCalledWith("celebi");
				expect(profileComponent.user.pokemon.id).toEqual(251);
				expect(profileComponent.user.pokemon.name).toEqual("celebi");
				expect(profileComponent.user.pokemon.image).toContain(".png");
				expect(profileComponent.user.pokemon.type).toEqual("grass");
			});
		});
	});
	
/*
	describe("profileComponent with valid user and invalid Pokemon", function(){
		var profileComponent, singleUser;

		beforeEach(function(){
			singleUser = { id: 2, name: "Erlich Bachman", email: "erlich@aviato.com", phone: 4155552233, pokemon: { isPresent: true, name: "deathmetaleagle"}, icon: { isPresent: false, name: null} };
			spyOn(ImageService, "findByName").and.callThrough();
			profileComponent = $controller("profileComponent", {resolvedUser: singleUser, ImageService: ImageService, $state: $state});
		});
		// https://www.native-instruments.com/forum/data/avatars/m/328/328352.jpg?1439377390
		it("should call findByName() and default to a placeholder image", function(){
			expect(profileComponent.user.pokemon.image).toBeUndefined();

			$httpBackend.whenGET(API + singleUser.pokemon.name).respond(404, $q.reject(RESPONSE_ERROR));
			$httpBackend.flush();

			expect(ImageService.findByName).toHaveBeenCalledWith("deathmetaleagle");
			expect(profileComponent.user.pokemon.image).toEqual("https://www.native-instruments.com/forum/data/avatars/m/328/328352.jpg?1439377390");
		});
	});

	describe("profileComponent with invalid user", function(){
		var profileComponent, singleUser;

		beforeEach(function(){
			spyOn($state, "go");
			spyOn(ImageService, "findByName");

			profileComponent = $controller("profileComponent", { resolvedUser: singleUser, ImageService: ImageService, $state: $state});
		});

		it("should redirect to 404", function(){
			expect(profileComponent.user).toBeUndefined();
			expect(ImageService.findByName).not.toHaveBeenCalled();
			expect($state.go).toHaveBeenCalledWith("404");
		});
	});
	*/
});