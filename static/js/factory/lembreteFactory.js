todoApp.factory('lembreteFactory', function($localStorage,$location,$rootScope){
	return {
		add: function(lembrete){
			console.log(lembrete)
			bd = $localStorage.todoapp
		
			bd.lembrete.push(lembrete);
			$localStorage.todoapp = bd;
		},
		remove: function(lembrete){
			setTimeout(function(){
				bd = $localStorage.todoapp
				console.log(bd.lembrete.indexOf(lembrete))
				bd.lembrete.splice(bd.lembrete.indexOf(lembrete),1)
				$localStorage.todoapp = bd;
			},200)
		}
	}
});
