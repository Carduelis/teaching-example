import { Component } from './../fake_libs/Carduelis';
import Post from './Post';

class Posts extends Component {
	className = 'posts';
	render() {
		const { posts } = this.state;
		return posts.map(post => new Post({ state: post }));
	}
}

export default Posts;
