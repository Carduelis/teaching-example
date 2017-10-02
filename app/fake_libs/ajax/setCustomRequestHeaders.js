export default (request, headersArray) => {
	try {
		if (Array.isArray(headersArray)) {
			headersArray.forEach(header => {
				if (Array.isArray(header) && header.length !== 2) {
					request.setRequestHeader(...header);
				} else {
					throw new Error(`header should be an array. First value is for header, second is for value of this header`);
				}
			})
		} else {
			throw new Error(`${typeof headersArray} "${headersArray}" given, an array expected.`);
		}
	} catch(e) {
		throw new Error(e);
	}
}
