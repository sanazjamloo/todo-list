(function(){
  angular.module('todo', []).controller('MainCtrl', function($http) {

        var self = this;

    $http.get('/todos')  // make a GET request to /todos
      .then(function(response) { // call this function when a response is received
        self.todos = response.data.todos; // save the returned json to self.todos
      })
      .catch(function(err) { // catch the error if one happens
        console.log(err)
      });
//=========================================
//keeping track of app states
      this.isCreating = false;
      this.isEditing = false;
      this.editedTodo = null;

      function startCreating() {
        this.isCreating = true;
        this.isEditing = false;
      }




























      // PUBLIC METHODS

      this.startCreating = startCreating;
      this.addTodo = addTodo;







  });
})();
