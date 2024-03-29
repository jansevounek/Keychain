import "bootstrap/dist/css/bootstrap.css"
import { createApp } from 'vue'
import App from './App.vue'
import router from "./router"

import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDCoTjONchtcuxzVgET22qLgtCnu2C1pCU",
    authDomain: "test-2ef41.firebaseapp.com",
    projectId: "test-2ef41",
    storageBucket: "test-2ef41.appspot.com",
    messagingSenderId: "245285367696",
    appId: "1:245285367696:web:d7489de1746278c6e3cd15"
};
initializeApp(firebaseConfig);

const app = createApp(App)

app.use(router)

app.component(
    'addCredentials.vue',
    {}
)

app.mount('#app')

import "bootstrap/dist/js/bootstrap.js"
