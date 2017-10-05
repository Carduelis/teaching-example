import { Component } from './Component';
const simpleRender = function(target, Cmpnt, state) {
	if (!Cmpnt instanceof Component) {
		throw new Error('Given component is not an instance of Component');
	}
	if (!target instanceof Node) {
		throw new Error('target is not an instance of Node');
	}
	target.innerHTML = '';
	const element = new Cmpnt({ state });
	target.appendChild(element);
}

export { simpleRender };
