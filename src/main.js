import Vue from 'vue';
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader
import App from './App.vue';

Vue.config.productionTip = true;
Vue.use(Vuetify)


//import { library } from '@fontawesome/fontawesome-svg-core'
//import { faCoffee, faChild, faCircle, faArchive } from '@fontawesome/free-solid-svg-icons'
//import { faComment } from '@fontawesome/free-regular-svg-icons'
//import { faTwitter } from '@fontawesome/free-brands-svg-icons'
//import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from '@fontawesome/vue-fontawesome'

//library.add(
//  faCoffee,
//  faCircle,
//)

//Vue.component('font-awesome-icon', FontAwesomeIcon)
//Vue.component('font-awesome-layers', FontAwesomeLayers)
//Vue.component('font-awesome-layers-text', FontAwesomeLayersText)

Vue.config.productionTip = false


new Vue({
    render: h => h(App)
}).$mount('#app');
