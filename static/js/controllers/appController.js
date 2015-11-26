todoApp.controller('appController',function($scope,$mdToast,$mdSidenav,$localStorage,lembreteFactory,tarefaFactory){
	setup();

	function setup(){
		console.log('Executando setup...');
		if(!$localStorage.todoapp)
			$localStorage.todoapp = {}
		if(!$localStorage.todoapp.lembrete)
			$localStorage.todoapp.lembrete = []

		if(!$localStorage.todoapp.tarefas)
			$localStorage.todoapp.tarefas = []

		$scope.lembretes = $localStorage.todoapp.lembrete
		$scope.tarefas = $localStorage.todoapp.tarefas
	}


	$scope.finalizarLembrete = function(lembrete){

		lembreteFactory.remove(lembrete)
		$mdToast.show($mdToast.simple().position('right','top').content('Finalizamos seu lembrete: '+lembrete.title));
	}


	$scope.finalizarTarefa = function(tarefa){

		tarefaFactory.remove(tarefa)
		$mdToast.show($mdToast.simple().position('right','top').content('Finalizamos seu Tarefa: '+tarefa.title));
	}


	console.log('App Controller');
	  var index = this;
	  index.toggleSidenav = function(menuId) {
	   	 $mdSidenav(menuId).toggle();
	  };
	  index.showActionToast = function() {
	    var toast = $mdToast.simple()
	          .content('Action Toast!')
	          .action('OK')
	          .highlightAction(false)
	          .position('top', 'right');
	    	$mdToast.show(toast).then(function(response) {
	      if ( response == 'ok' ) {
	        alert('You clicked \'OK\'.');
	      }
	    });
	  };
   	index.close = function () {
      $mdSidenav('left').close()
    };
})


//lembrete controller

todoApp.controller('lembreteController',function($mdToast,$scope,lembreteFactory){

    $scope.salvarLembrete =  function(lembrete){
    	$mdToast.show($mdToast.simple().position('right','top').content('Salvamos o seu lembrete:'+lembrete.title));
    	lembrete.data = $scope.dataHora = new Date($scope.dataHora).getTime();
    	lembreteFactory.add(lembrete)
    	$scope.obj = {}
    }

})


//tarefa controller

todoApp.controller('tarefaController',function($mdToast,$scope,tarefaFactory){

    $scope.salvarTarefa =  function(tarefa){
    	$mdToast.show($mdToast.simple().position('right','top').content('Salvamos sua tarefa: '+tarefa.title));
    	tarefa.data = $scope.dataHora = new Date($scope.dataHora).getTime();
    	tarefaFactory.add(tarefa)
    	$scope.tar = {}
    }

})