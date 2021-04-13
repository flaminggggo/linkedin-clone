import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyACxU3pE7EZuDAove8FdvVE4W1raC_abZE",
    authDomain: "linkedin-clone-ce978.firebaseapp.com",
    projectId: "linkedin-clone-ce978",
    storageBucket: "linkedin-clone-ce978.appspot.com",
    messagingSenderId: "440049004569",
    appId: "1:440049004569:web:0ba823d013cbce91cafa88"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };