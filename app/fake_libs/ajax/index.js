import getXHR from './XHR';
import jsonpHack from './jsonp';
import safeParser from './safeParser';
import setCustomRequestHeaders from './setCustomRequestHeaders';
import userOptionsChecker from './userOptionsChecker';
import { IS_ASYNC, DEFAULT_CONFIG } from './constants';

const startRequest = userOptions => new Promise((resolve, reject) => {
	userOptionsChecker(userOptions);
	// it for futrher developent. for example it is for transforming lowercased method to uppercased, or for shortcut of cache-control header, etc.
	const userAutoCorrect = {};
	const options = Object.assign({}, DEFAULT_CONFIG, userOptions, userAutoCorrect);
	const { url, jsonp, method, success, error, always, data, contentType, withCredentials, headers, debug, responseType } = options;
	if (debug) {
		console.log('default options is', DEFAULT_CONFIG);
		console.log('user options is', userOptions);
		console.log('sent options is', options);
	}
	if (jsonp) {
		const jsonpPromise = jsonpHack(url);
		resolve(jsonpPromise);
	} else {
		const request = getXHR();
		request.open(method, url, IS_ASYNC);
		request.withCredentials = withCredentials;
		request.responseType = responseType;
		request.setRequestHeader('Content-type', contentType);
		setCustomRequestHeaders(request, headers);
		request.onreadystatechange = function () {
			if (debug) {
				console.log(request);
			}
			if (request.readyState === 4) {
				const response = responseType ==='json' ? request.response : safeParser(request);
				if (request.status >= 200 && request.status < 300) {
					typeof success === 'function' && success(response, request, options);
					resolve(response);
				} else {
					typeof error === 'function' && error(response, request, options);
					reject(request);
				}
				typeof always === 'function' && always(response, request, options);
			}
		};
		request.send(data);
	}
});

export default startRequest;
