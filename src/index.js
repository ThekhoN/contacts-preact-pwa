// import 'promise-polyfill';
// import 'isomorphic-fetch';
import { h, render } from 'preact';
import store from './store';
import { Provider } from 'preact-redux';
import { getRouter } from './router';
import './style.css';

let root;
function init() {
	let App = require('./components/app').default;
	root = render(
		(
			<Provider store={ store }>
				{getRouter()}
			</Provider>
		)
		, document.getElementById('root'), root);
}

// register ServiceWorker via OfflinePlugin, for prod only:
if (process.env.NODE_ENV==='production') {
	require('./pwa');
}

// in development, set up HMR:
if (module.hot) {
	require('preact/devtools');   // turn this on if you want to enable React DevTools!
	module.hot.accept('./components/app', () => requestAnimationFrame(init) );
}

init();
