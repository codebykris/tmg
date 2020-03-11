const axios = require('axios');

/**
 * Request Utility class, used to make API requests
 * @param {Object} params - containing:
 * @param {String} requestPath - the pathname of the homepage (defaults to '/')
 * @param {String} requestEndpoint - the pathname of the homepage (defaults to '/')
 */
class Request {
	constructor(endpoint) {
		this.endpoint = Object.assign({
			path: 'https://my-json-server.typicode.com/telegraph/front-end-exercise-contractors/',
			uri: 'comments'
		}, endpoint);
	}

	/**
	 * Make an API call, to retrieve data from Restful API service
	 * @return {String}
	 */
	getData() {
		axios.get(this.endpoint.path + this.endpoint.uri)
		.then(function (response) {
			 // console.log(response)
		})
		.catch(function (error) {
			// console.log(error);
		})
		.finally(function (response) {
			// callback
		}); 
	}
}

module.exports = Request;
