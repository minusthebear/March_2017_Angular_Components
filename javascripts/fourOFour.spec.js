describe("404 page", function(){
	var $404;

	beforeEach(angular.mock.module("app"));

	beforeEach(inject(function(_$componentController_){
		$404 = _$componentController_("fourOFour", {
			$scope: {}
		});
	}));

	it("should be defined", function(){
		expect($404).toBeDefined();
	});
});