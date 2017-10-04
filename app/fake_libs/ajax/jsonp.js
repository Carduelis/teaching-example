import uniqId from "./uniqId";
function jsonp(url) {
	return new Promise((resolve, reject) => {
		const callbackName = `jsonp_callback_${uniqId()}`;
		const timer = setTimeout(() => {
			reject(Error("Time is up!"));
		}, 10000);
		window[callbackName] = data => {
			clearTimeout(timer);
			delete window[callbackName];
			document.body.removeChild(script);
			resolve(data);
		};

		const script = document.createElement("script");
		script.src =
			url + (url.indexOf("?") >= 0 ? "&" : "?") + "callback=" + callbackName;
		try {
			document.body.appendChild(script);
		} catch (e) {
			reject(e);
		}
	});
}

export default jsonp;
