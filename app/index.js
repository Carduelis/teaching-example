import ajax from "./fake_libs/ajax";
import url from "./url";
import "./styles/style.less";
import Trianglify from "trianglify";
const rootElement = document.getElementById("root");
var pattern = Trianglify({
	width: window.innerWidth,
	height: window.innerHeight
});
rootElement.appendChild(pattern.canvas());
// @isTestable(true)
// class MyClass {}
//
// function isTestable(value) {
// 	return function decorator(target) {
// 		target.isTestable = value;
// 	};
// }

setTimeout(() => {
	ajax({
		url,
		// jsonp: true,
		debug: true,
		withCredentials: true,
		success: (...rest) => {
			console.log(...rest);
		},
		error: (...rest) => {
			console.error(...rest);
		}
	}).then(response => console.log(response), error => console.error(error));
	console.log("end");
}, 1000);

class Rabbit {
	constructor(name) {
		this.name = name;
	}
	sayHi() {
		return "My name is " + this.name;
	}
}

const vasya = new Rabbit("Вася");
vasya.sayHi();
