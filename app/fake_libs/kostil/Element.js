class Element {
	constructor(options) {
		this.id = new Date().getTime().toString(32);
		this.tagName = options.tagName || 'div';
		this.className = options.className;
		this.state = options.state || {};
		this.createNode();
		return this.node;
	}
	createNode() {
		this.node = document.createElement(this.tagName);
		this.node.setAttribute('view', this.id);
		if (this.className) {
			this.node.setAttribute('class', this.className);
		}

		if (typeof this.onRender === 'function') {
			this.onRender(this.node);
		}
		if (typeof this.onClick === 'function') {
			this.node.addEventListener('click', this.onClick.bind(this));
		}
		const content = this.render();
		if (typeof content === 'string') {
			this.node.innerHTML = this.render();
		} else if (Array.isArray(content)) {
			content.forEach(node => {
				this.node.appendChild(node);
			})
		} else {
			console.error("Это не массив и не строка");
		}
	}
}

export { Element };
