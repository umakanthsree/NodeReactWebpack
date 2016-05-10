import React from 'react';
import ReactDom from 'react-dom';
import World from './world.js';
 
class Hello extends React.Component {
	constructor(props){
		super(props);
		this.state = {value: 'Hello!', likesCount: 0 };
		this.onChange = this.onChange.bind(this);
		this.onLike = this.onLike.bind(this);
	}

	onLike () {
    	let newLikesCount = this.state.likesCount + 1;
    	this.setState({likesCount: newLikesCount});
 	 }
	onChange(event) {
		console.log(event);
		this.setState({value: event.refs.field.value});
	}

  render() {
    return (
    	<div>
    		<h1>Welcome to application</h1>
    			Likes : <span>{this.state.likesCount}</span>
       		 	<div><button onClick={this.onLike}>Like Me</button></div>
    		<World handleChange={this.onChange} value={this.state.value}/> 
    	</div>
    )
  }
}

ReactDom.render(<Hello />,document.getElementById('app'));