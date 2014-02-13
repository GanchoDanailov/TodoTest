var scotchTodo = angular.module('scotchTodo', []);

function mainController($scope, $http) {
	$scope.formData = {};

	$scope.getTotalTodos=function(){
		return $scope.todos.length;
	};


	// when landing on the page, get all todos and show them
	$http.get('/api/todos')
		.success(function(data) {
			$scope.todos = data;
		})
		.error(function(data) {
			console.log('Error: ' + data);
		});

	// when submitting the add form, send the text to the node API
	$scope.createTodo = function() {
		$http.post('/api/todos', $scope.formData)
			.success(function(data) {
				$('input').val('');
				$scope.todos = data;
			})
			.error(function(data) {
				console.log('Error: ' + data);
			});
	};

	// update todo
	$scope.updateTodo = function(id) {
		$http.post('/api/todoupdate/' + id, $scope.formData)
			.success(function(data) {
				$scope.todos = data;
				console.log('ne6to da razberem: ' + $scope.getDoneTodos());
				progressBar();
			})
			.error(function(data) {
				console.log('Error: ' + data);
			});
	};

	// delete a todo after checking it
	$scope.deleteTodo = function(id) {
		$http.delete('/api/todos/' + id)
			.success(function(data) {
				$scope.todos = data;
			})
			.error(function(data) {
				console.log('Error: ' + data);
			});
	};

	$scope.getDoneTodos=function(){
		var dones=0;
	    angular.forEach($scope.todos, function(todo2) {
	      if (todo2.done==true) dones++;
		});
	    return dones;
	    console.log('dsadasdasdas: '+ $scope.getDoneTodos());
	};

	function progressBar(){
		
		$('input[type="checkbox"].style3').checkbox({
		    buttonStyle: 'btn-danger',
			buttonStyleChecked: 'btn-success',
		    checkedClass: 'icon-check',
		    uncheckedClass: 'icon-check-empty'
		});
		$scope.brogressBarPersent=100/(($scope.getTotalTodos())/($scope.getDoneTodos()));
		
	};

	 $scope.progressBar=function(){
		
		$('input[type="checkbox"].style3').checkbox({
		    buttonStyle: 'btn-danger',
			buttonStyleChecked: 'btn-success',
		    checkedClass: 'icon-check',
		    uncheckedClass: 'icon-check-empty'
		});
		$scope.brogressBarPersent=100/(($scope.getTotalTodos())/($scope.getDoneTodos()));
		
	};

	

    

	$scope.$watch('todos.length', function(){
	    progressBar();
	});

}
