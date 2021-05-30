import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDx2HnP3cuPLYt4UThx85KD4mD1mvXV-u4",
  authDomain: "cahtapp2.firebaseapp.com",
  projectId: "cahtapp2",
  storageBucket: "cahtapp2.appspot.com",
  messagingSenderId: "1089911542663",
  appId: "1:1089911542663:web:5907ca3826bff8dd7b3922",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
