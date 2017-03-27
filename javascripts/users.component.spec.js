"use strict";

describe("componentApp Users Component", function(){
	beforeEach(module("app"));

	var usersComponent;

	beforeEach(inject(function(_$componentController_){
		usersComponent = _$componentController_("usersComponent", {
			$scope: {}
		});
	}));

	it("can be created", function(){
		expect(usersComponent).toBeDefined();
	});
	it("has defined values", function(){
		expect(usersComponent.testing).toBeDefined();
		expect(usersComponent.testing).toEqual("Hello Cruel World!");
	});
});