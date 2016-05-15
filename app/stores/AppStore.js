import alt from '../alt';
import AppActions from '../actions/AppActions';
import AppSource from '../actions/AppSource';

class AppStore{
	constructor(){
		this.registerAsync(AppSource);
		this.bindActions(AppActions);

		this.state = {
			userList:[],
			value: 'Hello!', 
			likesCount: 0
		}
	}

	onFetchDataSuccess(json){
		console.log('onFetchDataSuccess', json);

		this.setState({ userList: json });

		// { userList: this.state.userList.concat(json) }

		console.log('onFetchDatasjhsdj', this);
	}

	onFetchDataFailure(json){
		this.setState(this.state.userList, [])
	}
}

export default alt.createStore(AppStore);
