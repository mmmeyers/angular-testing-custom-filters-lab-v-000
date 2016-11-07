describe('Favorite Food Filter', function () {
	var $controller;

	beforeEach(module('app'));

	beforeEach(inject(function ($injector) {
		$filter = $injector.get('$filter');
	}));

	it('should filter an array of objects depending on the FavoriteFood property in the object', function() {
		var mockedExample = [{
			name: 'Olli',
			favoriteFood: 'Friskies'
		},
		{
			name: 'Jinni',
			favoriteFood: 'Whiskas'
		}
	];

		var results = $filter('favoriteFood')(mockedExample, 'Friskies');
		expect(results[0].name).toEqual('Olli');

	});


});
