import React from 'react';
import ReactDOM from 'react-dom';
import TextField from './TextField'
 
export default class World extends React.Component {
  render() {
    return (
    	<div>
    		<h3>Input your name</h3>
    		<TextField data={this.props.value} placeholder="name" onChange={this.props.handleChange} />
    		<TextField data={this.props.value} placeholder="name" readOnly={true} />
    	</div>
   	)
  }
}
