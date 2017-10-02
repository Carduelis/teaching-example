import {
	AVAILABLE_METHODS,
	NO_OPTIONS_ERROR,
	ZERO_KEYS_ERROR,
	WRONG_OPTIONS_TYPE,
	URL_IS_NOT_SET,
	URL_IS_NOT_A_STRING,
	WRONG_METHOD,
	WRONG_SUCCESS_CALLBACK,
	WRONG_ERROR_CALLBACK,
	WRONG_ALWAYS_CALLBACK,
	USELESS_DATA_WHILE_GET
} from './constants';

const checker = userOptions => {
	switch (typeof userOptions) {
		case 'undefined':
			console.warn(NO_OPTIONS_ERROR);
		break;
		case 'object':
			if (Object.keys(userOptions) === 0) {
				console.warn(ZERO_KEYS_ERROR);
			} else {
				checkKeys(userOptions)
			}
		break;
		default:
			console.warn(NO_OPTIONS_ERROR);
		break;
	}
}

const checkKeys = userOptions => {
	const { url, method, success, error, always, data, contentType, withCredetials, headers } = userOptions;
	if (typeof url !== 'string' && typeof url !== 'undefined') {
		throw new Error(URL_IS_NOT_A_STRING);
	} else if (typeof url !== 'string') {
		console.warn(URL_IS_NOT_SET);
	}
	if (typeof method !== 'undefined' && !AVAILABLE_METHODS.includes(method)) {
		throw new Error(WRONG_METHOD)
	}
	if (typeof success !== 'undefined' && typeof success !== 'function') {
		throw new Error(WRONG_SUCCESS_CALLBACK)
	}
	if (typeof error !== 'undefined' && typeof error !== 'function') {
		throw new Error(WRONG_ERROR_CALLBACK)
	}
	if (typeof always !== 'undefined' && typeof always !== 'function') {
		throw new Error(WRONG_ALWAYS_CALLBACK)
	}
	if (method === 'GET' && (data !== null || typeof data !== 'undefined')) {
		console.warn(USELESS_DATA_WHILE_GET);
	}
}

export default checker;
