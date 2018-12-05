var React = require('react')
var ReactDOM = require('react-dom')


//Create component
var TodoComponent = React.createClass({
    render: function(){
        return(
            <div>
                <h1>heeeeeeeeey my name is</h1>
                <p>{this.props.msg}</p>
                <p><strong>name: </strong>{this.props.pet.name}</p>
                <p><strong>age: </strong>{this.props.pet.age}</p>
            </div>
        );
    }
});

var pets = {name:'rosa', age: 4};

//put component into html page
ReactDOM.render(<TodoComponent msg="smth" pet={pets}/>, document.getElementById("todo-wrapper"));