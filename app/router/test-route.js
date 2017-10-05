import _ from 'lodash';
import Trianglify from "trianglify";
import ajax from "./../fake_libs/ajax";
import url from "./../url";
export default function(rootElement) {
	const post = `
		<div class="post">
			<div class="post-image">
				<img src="<%-url%>">
			</div>
			<p class="post-description">
				<%-description%>
			</p>
		</div>
	`;


	ajax({
		url: "instagram_data.json",
		success: data => {
			const instaPostArray = data.data;
			const divArray = instaPostArray.map(item => {
				const div = document.createElement("DIV");
				const json = {};
				json.url = item.images.standard_resolution.url;
				if (item.caption) {
					json.description = item.caption.text;
				} else {
					json.description = 'НЕТ ОПИСАНИЯ!!!!'
				}
				div.innerHTML = _.template(post)(json);
				return div;
			});
			divArray.forEach(div => {
				rootElement.appendChild(div)
			});

			rootElement.innerHTML = _.template(post)(json);
		},
		error: (...rest) => {
			console.error(...rest);
		}
	})

}
