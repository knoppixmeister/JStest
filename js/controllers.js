var jstestControllers = angular.module('jstestControllers', []);

jstestControllers.controller('ItemsListCtrl', ['$scope', '$http',
	function($scope, $http) {
		/*
		$http.get('phones/phones.json').success(function(data) {
			$scope.phones = data;
		});
		 */

		$scope.items = 	[
		               	 	{
		               	 		'text': 'dsdfsdfsdf',
		               	 	},
		               	 	{
		               	 		'text': 'aaaaaaaaaaa',
		               	 	}
		                ];

		$scope.saveItem = function() {
			//alert('SAVE_ITEM');

			$('#itemModal').modal('hide');
		};
		$scope.showHideChilds = function() {
			alert('lala');
		};
		$scope.addChildItem = function() {
			$('#itemModal').modal('show');
		};
		$scope.editItem = function() {
			$('#itemModal').modal('show');
		};
		$scope.deleteItem = function() {
			if(confirm('Are you sure delete this item?')) {
				
			}
		};
	}
]);
