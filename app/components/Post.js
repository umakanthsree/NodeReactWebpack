import React from 'react';
import ReactDOM from 'react-dom';
import TextField from './TextField';
import { Button } from 'react-bootstrap';
 
export default class Post extends React.Component {
  render() {
  	const userList =  this.props.data;
  	const userDetails = userList.map((userItem, index) => {
    // const title = userItem['name'];
    return (
    	<div>
	    	<TextField data={userItem.name} placeholder="name" readOnly={true} />
	    	<TextField data={userItem.profession} placeholder="profession" readOnly={true}/>
	    </div>
    );
  });

    return (
    	<div>
    				{userDetails}
    		<h3>Input your name</h3>
    		<TextField data={this.props.value} placeholder="name" onChange={this.props.handleChange} />
    		<TextField data={this.props.value} placeholder="name" readOnly={true} />
    		<Button> add User </Button>
    	</div>
   	)
  }
}
