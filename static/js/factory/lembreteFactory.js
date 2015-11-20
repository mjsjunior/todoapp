todoApp.factory('lembreteFactory', function($localStorage){
	return {
		add: function(lembrete){
			console.log(lembrete)
			bd = $localStorage.todoapp
		
			bd.lembrete.push(lembrete);
			$localStorage.todoapp = bd;
		},
		remove: function(lembrete){
			console.log(lembrete.msg);
		}
	}
});
