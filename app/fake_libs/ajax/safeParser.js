export default request => {
	const { responseText } = request;
	try {
		return JSON.parse(responseText);
	} catch (e) {
		return responseText
	}
}
