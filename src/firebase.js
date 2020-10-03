import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyCmF5f4ZkbyCWq4d7CXfyTUFBZJVI0D-_g",
  authDomain: "buncholunch-89ce8.firebaseapp.com",
  databaseURL: "https://buncholunch-89ce8.firebaseio.com",
  projectId: "buncholunch-89ce8",
  storageBucket: "buncholunch-89ce8.appspot.com",
  messagingSenderId: "80210873507",
  appId: "1:80210873507:web:fac97d08505023d59b4316",
  measurementId: "G-GSH6WQMP8Q"
};

const firebaseApp=firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export {db};
export default firebase;