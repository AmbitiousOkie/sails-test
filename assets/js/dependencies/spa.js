angular.module('Platzi',[])
angular.module('Platzi').controller('BaseCtrl', ['$scope', function ($scope){

	$scope.emojis = [{
		id: 1,
		name: '=)'
	},
	{
		id: 2,
		name: '=/'
	},
	{
		id: 3,
		name: '=('
	},
	{
		id: 4,
		name: '=O'
	}];

}]);