jstestApp.config(['$routeProvider',
  	function($routeProvider) {
  		$routeProvider.when('/', {
  							templateUrl:	'/partials/list.html',
  							controller:		'ItemsListCtrl'
  						}).
  						otherwise({
  							redirectTo: '/'
  						});
  	}
]);