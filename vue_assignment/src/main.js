import { createApp } from 'vue'
import App from './views/App.vue'

import router from "./router/index"
// import BootstrapVue from 'bootstrap-vue'
// import SimpleVueValidation from 'simple-vue-validator';

// // import "bootstrap-vue/dist/bootstrap-vue.css";

// Vue.use(SimpleVueValidation);
// Vue.use(BootstrapVue);

// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'

createApp(App).use(router).mount('#app')