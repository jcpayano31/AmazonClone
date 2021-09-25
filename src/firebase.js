import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCIcetbv5jJm7YfCO-cnnyZvYRrSlvJIwc",
  authDomain: "clone-e2c5f.firebaseapp.com",
  databaseURL: "https://clone-e2c5f.firebaseio.com",
  projectId: "clone-e2c5f",
  storageBucket: "clone-e2c5f.appspot.com",
  messagingSenderId: "693966453038",
  appId: "1:693966453038:web:2579b84bba9fa11850e2bf",
  measurementId: "G-R8QNZ0RM89",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db , auth};
