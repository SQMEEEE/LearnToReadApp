import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';   

  const firebaseConfig = {

  apiKey: "AIzaSyA0WV8SnlRQlNce1HpbucNzp_hIXLHWZAw",

  authDomain: "learntoreadapp-c47a6.firebaseapp.com",

  projectId: "learntoreadapp-c47a6",

  storageBucket: "learntoreadapp-c47a6.appspot.com",

  messagingSenderId: "661275107494",

  appId: "1:661275107494:web:3fcca6afd0f113f82cd467",

  measurementId: "G-H7RFPJ25VQ"  
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const auth = firebase.auth();
const firestore = firebase.firestore();

export { auth, firestore };
