var todoApp = angular.module('todoApp',['ngMaterial','ngRoute','ngStorage','ngMaterialDatePicker']);

todoApp.config(['$routeProvider',function($routeProvider){
	$routeProvider
		.when('/',{
			controller:'appController',
			templateUrl: 'todoapp/templates/home.html'
		})
		.when('/criar-tarefa',{
			controller:'tarefaController',
			templateUrl: 'todoapp/templates/criar-tarefa.html'
		})
		.when('/criar-lembrete',{
			controller:'lembreteController',
			templateUrl: 'todoapp/templates/criar-lembrete.html'
		})
		.otherwise({
			redirectTo: '/'
		})
}])



