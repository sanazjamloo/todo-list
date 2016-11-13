var express = require('express');
var router = express.Router();

var Todo = require('../models/todo.js');


router.get('/', function(req, res){
  var query = Todo.find({});
  query.then(function(todos) {
    console.log(todos)
    res.json({todos: todos})

  })
  .catch( function(err) {
    res.json(500, `ERROR: ${err}`)
  })
});

router.get('/:todoId', function(req, res){
  Todo.findOne({_id: req.params.todoId})
    .then(function(todo){
      res.json({todo: todo});
    })
    .catch(function(err){
      res.json(500, `ERROR: ${err}`)
    });
});
