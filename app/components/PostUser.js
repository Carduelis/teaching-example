import { Component } from './../fake_libs/Carduelis';

class PostUser extends Component {
	render() {
		const { user } = this.state;
		const style = `background-image: url(${user.profile_picture})`;
		return `
			<div class="user">
				<div class="user-avatar" style="${style}">
				</div>
				<div class="user-name" title="${user.id}">
					<b class="user-nickname">${user.username}</b>
					<span class="user-fullname">${user.full_name}</span>
				</div>
			</div>
		`
	}
}

export default PostUser;
