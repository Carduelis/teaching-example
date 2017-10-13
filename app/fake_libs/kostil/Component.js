class Component {
	constructor(options) {
		this.tagName = options.tagName || 'div';
	}
	attach() {
		const nodes = this.render();
		this.node = new Element({ tagName: this.tagName });
		nodes.forEach(node => {
			this.node.appendChild(node);
		});
	}
}


class Kek extends Component {
	render() {
		const mapped = data.map(item => {
			return new Element2({ state: item });
		});
		return [
			new Element1(),
			...mapped,
			`Кек`
		]
	}
}
