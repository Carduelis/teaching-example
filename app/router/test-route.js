import _ from 'lodash';
import Trianglify from "trianglify";
import ajax from "./../fake_libs/ajax";
import url from "./../url";
import { Element } from '../fake_libs/kostil/Element';

class PostView extends Element {
	render() {
		const { item } = this.state;
		const userBlock = new UserView({
			className: 'post-user',
			state: item.user
		});
		const photoBlock = new PhotoView({
			className: 'post-image',
			state: item.images.low_resolution
		});
		return [
			userBlock,
			photoBlock
		]
	}
}

class PhotoView extends Element {
	render() {
		const { url } = this.state;
		return `
			<img src="${url}">
		`
	}
}

class UserView extends Element {
	render() {
		const { username, full_name } = this.state;
		return `
			<div class="user-name" title="691623">
				<b class="user-nickname">${username}</b>
				<span class="user-fullname">${full_name}</span>
			</div>
		`
	}
	onClick() {
		alert(this.id);
	}
}
const dataset = {
	username: 'wizzrd',
	full_name: 'Вася'
}


export default function(rootElement) {
	ajax({
		url: './instagram_data.json'
	}).then(({ data }) => {
		data.map(function(item) {
			const postView = new PostView({
				className: 'post',
				state: {
					item: item
				}
			});
			rootElement.appendChild(postView);
		});
	}).catch(error => {
		console.error(error);
	});
}
