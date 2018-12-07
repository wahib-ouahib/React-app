var React = require('react');
require('./styles/additem.css');

var AddItem = React.createClass({
    render: function(){
        return(
            <form id="add-todo" onSubmit={this.handleSubmit}>
                <input type="text" required ref="newItem"/>
                <input type="submit" value="I'm submit button xd"/>
            </form>
        );
    },

    //Custom functions
    handleSubmit: function(e){
        e.preventDefault();
        this.props.onAdd(this.refs.newItem.value);
    }
});

module.exports = AddItem;