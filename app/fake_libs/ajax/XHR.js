// to be honest i don't know why it could be nessesary
// i don't know does babel-polyfill it for us or does not. so it will be here
// but it definitely nessesary in case of nodejs using
export default function() {
	if (window.XMLHttpRequest) {
		return new XMLHttpRequest();
	} else {
		alert('Sorry, but you are using too old browser =(');
		throw new Error('XMLHttpRequest is not supported on this device. And it is not runnable via nodejs');
	}
}
