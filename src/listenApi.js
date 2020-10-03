import Axios from 'axios';

// listen API
const key = "5df881c89d644904bc39af8b922c9441";
const endpoint = "https://listen-api.listennotes.com/api/v2/";


// api call. passing objects that get destructured and passed to the call.
export default function listenApi(requestType, params) {
	console.log('params', params);
	return Axios({
		url: endpoint + requestType,
		params: {
			...params,
		},
		headers: {
			['X-ListenAPI-Key']: key,
		}
	})
}

