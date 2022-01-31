import Vue from 'vue'
import { firestorePlugin } from 'vuefire'

import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase/app'
import 'firebase/firestore'

// Get a Firestore instance
export const db = firebase
  .initializeApp({ projectId: 'MY PROJECT ID' })
  .firestore()

// Export types that exists in Firestore
// This is not always necessary, but it's used in other examples
const { Timestamp, GeoPoint } = firebase.firestore
export { Timestamp, GeoPoint }

// if using Firebase JS SDK < 5.8.0
db.settings({ timestampsInSnapshots: true })

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDETRZBsoyV9w9c7Y3XYUptBQzsfpPmuyE",
  authDomain: "wasa-64af6.firebaseapp.com",
  projectId: "wasa-64af6",
  storageBucket: "wasa-64af6.appspot.com",
  messagingSenderId: "718060249985",
  appId: "1:718060249985:web:d51b7d33fd960926837e80",
  measurementId: "G-GGTLWS5B03"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

Vue.prototype.axios = axios
Vue.use(VueAxios,axios)
Vue.config.productionTip = false
Vue.use(firestorePlugin)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
