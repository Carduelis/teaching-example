import { Component } from './../fake_libs/Carduelis';

class Loader extends Component {
	render() {
		const { text = 'Загрузка...' } = this.state;
		return `
			<div class="loader">
				<div class="loader-text">
					${text}
				</div>
			</div>
		`
	}
}

export default Loader;
