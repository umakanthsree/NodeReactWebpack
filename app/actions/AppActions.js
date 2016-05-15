import alt from '../alt'
// import mockData from '../users.json'

class AppActions{
	constructor(){
		this.generateActions('fetchDataSuccess','fetchDataFailure');
	}

	// fetchData(){
	// 	this.fetchDataSuccess(mockData);
	// }
}

export default alt.createActions(AppActions);
