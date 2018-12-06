var React = require('react')
var ReactDOM = require('react-dom')


//Create component
var TodoComponent = React.createClass({
    getInitialState: function(){
        return{
            todos: ['sport','sleep','code'],
            age: 22
        }
    },
    render: function(){
        var ager = setTimeout(function(){
            this.setState({
                age: 23
            })
        }.bind(this),5000);
        return(
            <div id="todo-list">
                <p>my age: {this.state.age}</p>
                <p>my todos</p>
                <ul>
                    <li>{this.state.todos[0]}</li>
                    <li>{this.state.todos[1]}</li>
                    <li>{this.state.todos[2]}</li>
                </ul>
            </div>
        );
    }
});

var pets = {name:'rosa', age: 4};

//put component into html page
ReactDOM.render(<TodoComponent msg="smth" pet={pets}/>, document.getElementById("todo-wrapper"));