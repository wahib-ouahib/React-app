var React    = require('react');
var ReactDOM = require('react-dom');
var TodoItem = require('./todoitem');
require('./styles/index.css');

//Create component
var TodoComponent = React.createClass({
    getInitialState: function(){
        return{
            todos: ['sport','sleep','code','eat'],
            age: 22
        } 
    },
    render: function(){
        var todos = this.state.todos;
        todos = todos.map(function(item, index){
            return(
                <TodoItem item = {item} key={index} onDelete={this.onDelete}/>
            );
        }.bind(this));
        return(
            <div id="todo-list">
                <p>todos: </p>
                <ul>
                    {todos}
                </ul>
            </div>
        );
    }, //render
    
    //Custom functions
    onDelete: function(item){
        var updatedTodos = this.state.todos.filter(function(val, index){
            return item !== val;
        })
        this.setState({
            todos: updatedTodos
        })
    }
});

//put component into html page
ReactDOM.render(<TodoComponent/>, document.getElementById("todo-wrapper"));