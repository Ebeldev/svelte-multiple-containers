import App from './App.svelte';

import App2 from './App2.svelte';

const app = new App({
	target: document.querySelector('#app')
});

const app2 = new App2({
	target: document.getElementById('app2')
})

// export default app2;
export default app;