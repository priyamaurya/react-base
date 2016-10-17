var React = require('react');

var ListItem = require('./ListItem.jsx');

var items = [{"id":1,"text":"list item1"},{"id":2,"text":"list item 2"},{"id":3,"text":"list item 3"}];

var List = React.createClass({

   render :function(){
  
    	var listItems = items.map(function(item){
    	  return <ListItem key={item.id} items={item.text}/>;
    	});

    	return(<ul>{listItems}</ul>);
   
   }
	
});

module.exports = List;