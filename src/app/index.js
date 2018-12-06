var React    = require('react')
var ReactDOM = require('react-dom')

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

//Create TodoItem Component
var TodoItem = React.createClass({
    render: function(){
        return(
            <li>
                <div className="todo-item">
                    <span className="item-name">{this.props.item}</span>
                    <span className="item-delete" onClick={this.handleDelete}> x </span>
                </div>
            </li>
        );
    },

    //Custom functions
    handleDelete: function(){
        this.props.onDelete(this.props.item);
    }
})

//put component into html page
ReactDOM.render(<TodoComponent/>, document.getElementById("todo-wrapper"));