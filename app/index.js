import ajax from "./fake_libs/ajax";
import url from "./url";
import "./styles/style.less";
import Trianglify from "trianglify";
const rootElement = document.getElementById("root");

var ourDiv = document.createElement("DIV");
function setStyle(target) {
	target.style.height = window.innerHeight/2 + "px";
	const hue = window.innerWidth;
	target.style.backgroundColor = 'hsl('+hue+', 50%, 50%)';
}
setStyle(ourDiv);
// var pattern = Trianglify({
// 	width: window.innerWidth,
// 	height: window.innerHeight
// });
rootElement.appendChild(ourDiv);

const myResize = function(event) {
	setStyle(ourDiv);
}

window.onresize = myResize;

// setTimeout(() => {
// 	ajax({
// 		url,
// 		// jsonp: true,
// 		debug: true,
// 		withCredentials: true,
// 		success: (...rest) => {
// 			console.log(...rest);
// 		},
// 		error: (...rest) => {
// 			console.error(...rest);
// 		}
// 	}).then(response => console.log(response), error => console.error(error));
// 	console.log("end");
// }, 1000);
//
