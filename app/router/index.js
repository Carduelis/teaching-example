import indexRoute from './index-route';
import postsRoute from './posts-route';
import testRoute from './test-route';
import notFoundRoute from './not-found-route';

export default function(rootElement) {
	rootElement.innerHTML = '';
	const router = event => {
		const path = window.location.hash.replace('#', '');
		switch (path) {
			case 'test':
				testRoute(rootElement);
				break;
			case 'posts':
				postsRoute(rootElement);
				break;
			case '':
				indexRoute(rootElement);
				break;
			default:
				notFoundRoute(rootElement);
				break;
		}
	}

	router(rootElement);

	window.onhashchange = router;
}
