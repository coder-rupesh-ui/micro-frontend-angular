import {createApp} from 'vue';
import Dashboard from './components/Dashboard.vue';

const mount = (el, { onSignIn, onNavigate, defaultHistory, initialPath }) => {
    const app = createApp(Dashboard);
    app.mount(el);
}

if (process.env.NODE_ENV === 'development') {
    const devEl = document.querySelector('#_dashboard-dev-root');
    if (devEl) {
        mount(devEl, {});
    }
}
export { mount };