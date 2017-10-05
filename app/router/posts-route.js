import ajax from '../fake_libs/ajax';
import Posts from '../components/Posts';
import Loader from '../components/Loader';
import { simpleRender } from '../fake_libs/Carduelis'

export default function(rootElement) {
	simpleRender(rootElement, Loader);
	ajax({
		url: './instagram_data.json'
	}).then(({ data }) => {
		simpleRender(rootElement, Posts, { posts: data });
	}).catch(error => {
		console.error(error);
		const state = { text: 'Ошибка'};
		simpleRender(rootElement, Loader, state);
	});
}
