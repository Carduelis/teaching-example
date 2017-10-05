class Component {
	constructor({ state, className } = {}) {
		this.id = new Date().getTime().toString(32);
		this.tagName = 'div';
		this.className = className;
		this.state = state || {};
		return this.attach();
	}
	getTemplate() {
		try {
			return this.render();
		} catch(e) {
			console.error(`you have an error in view #${this.id}`, this.node, e);
			return '<div class="error">Ошибка рендера</div>'
		}
	}
	renderRegions() {
		if (typeof this.regions === 'function') {
			const regions = this.regions();
			if (typeof regions !== 'object') {
				throw new Error('regions-function should return an object');
			}
			const tagNames = Object.keys(regions);
			tagNames.forEach(tagName => {
				try {
					const regionElement = this.node.getElementsByTagName(tagName)[0];
					const parent = regionElement.parentElement;
					const newElement = regions[tagName];
					parent.replaceChild(newElement, regionElement);
				} catch(e) {
					console.error(`no ${tagName} region`, e)
				}
			});
		}
	}
	attach() {
		// need to be refactored
		this.node = document.createElement(this.tagName);
		this.node.setAttribute('view', this.id);
		if (this.className) {
			this.node.setAttribute('class', this.className);
		}
		const template = this.getTemplate();
		if (Array.isArray(template)) {
			template.forEach(node => {
				try {
					this.node.appendChild(node)
				} catch (e) {
					console.error(e);
				}
			});
		} else if (template instanceof Node) {
			this.node.appendChild(template);
		} else {
			this.node.innerHTML = template;
		}
		if (typeof this.onClick === 'function') {
			this.node.addEventListener('click', this.onClick.bind(this));
		}
		this.renderRegions();
		if (typeof this.onRender === 'function') {
			this.onRender();
		}
		return this.node;
	}
}

export { Component };
