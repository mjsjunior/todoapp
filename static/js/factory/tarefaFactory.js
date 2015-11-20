todoApp.factory('tarefaFactory', function($localStorage){
	return {
		add: function(tarefa){
			console.log(tarefa)
			bd = $localStorage.todoapp
		
			bd.tarefas.push(tarefa);
			$localStorage.todoapp = bd;
		},
		remove: function(tarefa){
			console.log(tarefa.msg);
		}
	}
});
