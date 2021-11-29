import {initializeApp} from "firebase/app"
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCLbD-9ZqRFZDlfe_5DQUShrhUlWH4F7eY",
    authDomain: "repaso-vue-1.firebaseapp.com",
    projectId: "repaso-vue-1",
    storageBucket: "repaso-vue-1.appspot.com",
    messagingSenderId: "230369114722",
    appId: "1:230369114722:web:2684561a7b9e5bfe4fef3b",
    measurementId: "G-HLCBPS8J4G"
  };

initializeApp(firebaseConfig) 

const db = getFirestore()
const storage = getStorage()

export {db,storage}