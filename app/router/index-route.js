import Trianglify from "trianglify";
import { Component, simpleRender } from '../fake_libs/Carduelis';

class Welcome extends Component {
	render() {
		return `
			<div class="welcome">
				<div class="canvas"></div>
				<ul>
					<li><a href="#posts">Instagram posts</a>
					<li><a href="#test">Test page</a>
					<li><a href="#asdfdasdfsd">404 page</a>
				</ul>
			</div>
		`
	}
	onRender() {
		const img = new Trianglify({
			width: window.innerWidth/2,
			height: window.innerHeight/2,
		});
		console.log(this.node);
		this.node.getElementsByClassName('canvas')[0].appendChild(img.canvas())
	}
}

export default function(rootElement) {
	simpleRender(rootElement, Welcome);
}
