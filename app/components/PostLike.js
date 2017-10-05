import { Component } from './../fake_libs/Carduelis';

class PostLike extends Component {
	render() {
		const { likes } = this.state;
		console.log(likes);
		return `<span class="emoji">💗</span><span class="likes-count">${likes.count}</span>
		`
	}
	onClick(e) {
		const { likes, id } = this.state;
		const answer = confirm(`Лайков: ${likes.count}\nId: ${id}\n\nПерейти к посту?`);
		if (answer) {
			window.open(this.state.link, '_blank')
		}
	}
}

export default PostLike;
