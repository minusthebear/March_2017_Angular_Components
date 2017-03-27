"use strict";

describe("componentApp Users Component", function(){
	beforeEach(module("app"));

	var usersComponent, UsersService;

	const userList = [
		{ id: 1, name: "Richard Hendricks", email: "richard@piedpiper.com", phone: 4085550011, pokemon: { isPresent: true, name: "eevee"}, icon: { isPresent: false, name: null} },
		{ id: 2, name: "Erlich Bachman", email: "erlich@aviato.com", phone: 4155552233, pokemon: { isPresent: true, name: "celebi"}, icon: { isPresent: false, name: null} },
		{ id: 3, name: "Gavin Belson", email: "gavin@hooli.com", phone: 9165554455, pokemon: { isPresent: true, name: "snorlax"}, icon: { isPresent: false, name: null} }
	];

	beforeEach(inject(function(_$componentController_, _UsersService_){
		usersComponent = _$componentController_("usersComponent", {
			$scope: {}
		});
		UsersService = _UsersService_;

		spyOn(UsersService, "all").and.callFake(function(){
			return userList;
		});
	}));

	it("can be created", function(){
		expect(usersComponent).toBeDefined();
	});
	it("has defined values", function(){
		expect(usersComponent.testing).toBeDefined();
		expect(usersComponent.testing).toEqual("Hello Cruel World!");
	});

	it("should begin without having called UsersService.all()", function(){
		expect(UsersService.all).not.toHaveBeenCalled();
		expect(usersComponent.$onInit).toBeDefined();
		expect(usersComponent.users).not.toBeDefined()
	});

	it("should make a call to UsersService.all()", function(){
		usersComponent.$onInit();
		expect(UsersService.all).toHaveBeenCalled();
		expect(usersComponent.users).toEqual(userList);
	});
});