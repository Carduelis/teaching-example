import { Component } from './../fake_libs/Carduelis';
import PostUser from './PostUser';
import PostLike from './PostLike';
class Post extends Component {
	regions() {
		return {
			'user': new PostUser({ state: this.state }),
			'like': new PostLike({ state: this.state })
		}
	}
	render() {
		const { id, images, likes, user, caption } = this.state;
		console.log(this.state);
		const description = caption ? caption.text : '';
		const { url } = images.standard_resolution;
		const style = `background-image: url(${url})`
		return `
			<div class="post">
				<div class="post-image" style="${style}">
					<img src="${url}">
				</div>
				<div class="post-user"><user></user></div>
				<div class="post-description">
					<div class="post-likes"><like></like></div>
					<p class="post-text">${description}</p>
				</div>
			</div>
		`
	}
	onRender() {
		console.log('rendered');
	}
}

export default Post;
