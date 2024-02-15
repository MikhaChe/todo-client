import { createApp } from 'vue'
import App from './App'
import componentUI from '@/components/UI';

import 'bootstrap/dist/js/bootstrap.bundle.min'


const app = createApp(App);

componentUI.forEach(componentUI => {
    app.component(componentUI.name, componentUI)
})

app
    .mount('#app');
