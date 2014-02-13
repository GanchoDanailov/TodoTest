
function TodoCtrl ($scope,$window) {

	$scope.todos=[
		{text: "learn angular", done:false},
		{text:"play gutar", done:false}
	];

	$scope.getTotalTodos=function(){
		return $scope.todos.length;
	};
	$scope.getDoneTodos=function(){
		var dones=0;
	    angular.forEach($scope.todos, function(todo2) {
	      if (todo2.done==true) dones++;
		});
	    return dones;
	};

		
	$scope.deleateCompleated = function(){
		var oldTodos = $scope.todos;
    	$scope.todos = [];
	    angular.forEach(oldTodos, function(todo) {
	      if (!todo.done) $scope.todos.push(todo);
	    });
	    progressBar();
	};

	$scope.addTodo=function(){
		$scope.todos.push({text:$scope.formTodoText, done:false});
		$scope.formTodoText="";
		progressBar();
		//($window.mockWindow || $window).alert($scope.getDoneTodos());
		
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
	
	 $scope.greet = function() {
    ($window.mockWindow || $window).alert('Hello');
  }


}

$( document ).ready(function() {
  $('input[type="checkbox"].style3').checkbox({
    buttonStyle: 'btn-danger',
	buttonStyleChecked: 'btn-success',
    checkedClass: 'icon-check',
    uncheckedClass: 'icon-check-empty'
});
});