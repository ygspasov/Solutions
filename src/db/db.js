import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyCh-rLfSseLuZLXe5Rr1lJ2jEDnDS3jDZI",
    authDomain: "solutions-fc133.firebaseapp.com",
    databaseURL: "https://solutions-fc133.firebaseio.com",
    projectId: "solutions-fc133",
    storageBucket: "solutions-fc133.appspot.com",
    messagingSenderId: "537362428719",
    appId: "1:537362428719:web:1d326720fcf183162da7da"
  };

const db = firebase.initializeApp(firebaseConfig);
export default db