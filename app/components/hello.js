import React from 'react';
import ReactDom from 'react-dom';
import AppStore from '../stores/AppStore'
import Post from './Post.js';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
 
class Hello extends React.Component {
	constructor(props){
		super(props);

		// this.state = {value: 'Hello!', likesCount: 0 };
		this.onChange = this.onChange.bind(this);
		// this.onLike = this.onLike.bind(this);
	}

  componentWillMount(){
    this.setState(AppStore.getState());
  }

  componentDidMount(){
    console.log('componentDidMount');
    AppStore.listen(this.onChange);
    AppStore.fetchData();
  }

  componentWillUnMount(){
    AppStore.unlisten(this.onChange);
  }

	// onLike () {
 //    	let newLikesCount = this.state.likesCount + 1;
 //    	this.setState({likesCount: newLikesCount});
 // 	 }
	onChange() {
    console.log('componentDidMount',AppStore.getState());
		this.setState(AppStore.getState());
	}

  render() {
    console.log('render', this.state);
    return (
    	<div>
    		<h1>Welcome to application</h1>
        // <div><button onClick={this.onLike}>Like Me</button></div>
        <Post handleChange={this.onChange} data={this.state.userList || []}/> 
    	</div>
    )
  }
}

ReactDom.render(<Hello />,document.getElementById('app'));