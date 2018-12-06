var React = require('react')
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
                <TodoItem item = {item} key={index}/>
            );
        }.bind(this));
        return(
            <div id="todo-list">
                <p onClick={this.clicked}>smth</p>
                <ul>
                    {todos}
                </ul>
            </div>
        );
    }, //render
    
    //Custom functions
    clicked:function(){
        console.log('getting better at this');
    }
});

//Create TodoItem Component
var TodoItem = React.createClass({
    render: function(){
        return(
            <li>
                <div className="todo-item">
                    <span className="item-name">{this.props.item}</span>
                </div>
            </li>
        );
    }
})

//put component into html page
ReactDOM.render(<TodoComponent/>, document.getElementById("todo-wrapper"));