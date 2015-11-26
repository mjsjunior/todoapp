todoApp.factory('tarefaFactory', function($localStorage){
	return {
		add: function(tarefa){
			console.log(tarefa)
			bd = $localStorage.todoapp
		
			bd.tarefas.push(tarefa);
			$localStorage.todoapp = bd;
		},
		remove: function(tarefa){
			setTimeout(function(){
				bd = $localStorage.todoapp
				console.log(bd.tarefas.indexOf(tarefa))
				bd.tarefas.splice(bd.tarefas.indexOf(tarefa),1)
				$localStorage.todoapp = bd;

			},200)
		}
	}
	
});