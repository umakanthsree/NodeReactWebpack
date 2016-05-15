import AppActions from './AppActions';
import mockData from '../users'
import $ from 'jQuery';

const AppSource = {
	fetchData: {
	    remote(state) {
	      return new Promise((resolve, reject) => {
	        // API.get({ url })
	        //   .done((json) => {
	        //     resolve(json);
	        //   }).fail(() => {
	        //     reject('failed');
	        //   });
	      $.ajax({url: 'http://localhost:3000/getUsersList', dataType: "json"}).done((json) => {
	      	console.log('Promise success', json);
	      	resolve(json);
	      }).fail(() => {
	      	console.log('fail');
	      	reject('error');
	      });
	      });
	    },

	    success: AppActions.fetchDataSuccess, // (required)
	    error: AppActions.fetchDataFailure // (required)
	    // AppActions.fetchSectionSuccess(data);

	     // returning a Promise because that is what fetch does.
	    // return new Promise(function (resolve, reject) {
	    //   // simulate an asynchronous action where data is fetched on
	    //   // a remote server somewhere.
	    //   setTimeout(function () {
	    //     // resolve with some mock data
	    //     resolve(mockData);
	    //   }, 250);
	    // });
	    // return mockData;
	  }
}

export default AppSource;
