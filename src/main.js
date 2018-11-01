import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App.vue'
import router from './router/router'
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader
import { store } from './store'
import DateFilter from './filters/date';
import * as firebase from 'firebase';
import AlertComp from './components/Shared/Alert.vue';

Vue.use(Vuetify)
Vue.config.productionTip = false
Vue.filter('date', DateFilter);
Vue.component('app-alert', AlertComp);

new Vue({
  router,
  store,
  render: h => h(App),
  created() {
    firebase.initializeApp({
      apiKey: "AIzaSyAIXHFKHUfkXQonK6M_cQHHqHDzzUwZ9ro",
      authDomain: "meetupapp-76cf4.firebaseapp.com",
      databaseURL: "https://meetupapp-76cf4.firebaseio.com",
      projectId: "meetupapp-76cf4",
      storageBucket: "gs://meetupapp-76cf4.appspot.com",
    });
    firebase.auth().onAuthStateChanged((user)=>{
      if(user){
        this.$store.dispatch('autoSignIn', user);
      }
    });
    this.$store.dispatch('loadMeetups');
  },
}).$mount('#app')
