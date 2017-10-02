export const AVAILABLE_METHODS = ['GET', 'POST', 'PUT', 'PUSH', 'OPTIONS'];

export const IS_ASYNC = true;
export const DEFAULT_CONFIG = {
	method: 'GET',
	withCredentials: false,
 	contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
	headers: [],
	responseType: 'json',
	//
	forceParse: true,
	data: null,
	url: 'https://jsonplaceholder.typicode.com/posts/1',
 };

export const NO_OPTIONS_ERROR = `Seems like you did not pass options to AJAX-request, so it's useless =(`;
export const ZERO_KEYS_ERROR = `You did pass empty options to AJAX-request`;
export const WRONG_OPTIONS_TYPE = `Passed options-object to AJAX-request is not an object. Check it!`;
export const URL_IS_NOT_SET = 'Seems like you did not pass url key';
export const URL_IS_NOT_A_STRING = 'url is not a string';
export const WRONG_METHOD = `method is not allowed. Allowed methods: ${AVAILABLE_METHODS}`;
export const WRONG_SUCCESS_CALLBACK = 'Success callback is not a function';
export const WRONG_ERROR_CALLBACK = 'Error callback is not a function';
export const WRONG_ALWAYS_CALLBACK = 'Always callback is not a function';
export const USELESS_DATA_WHILE_GET = 'Passing any data while method is "GET" do not work and therefore is useless.';
