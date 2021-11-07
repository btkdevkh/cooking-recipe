import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDnAfKPeUv1OeAggfnMJPX_M2Ab4mOlZG0",
  authDomain: "jim-cook-site.firebaseapp.com",
  projectId: "jim-cook-site",
  storageBucket: "jim-cook-site.appspot.com",
  messagingSenderId: "194950845402",
  appId: "1:194950845402:web:75cdfca9598e28f407e6e3"
};

// Init firebase
firebase.initializeApp(firebaseConfig);

// Init services
const projectFirestore = firebase.firestore();

export { projectFirestore };
