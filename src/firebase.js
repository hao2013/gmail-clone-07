import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyACULtqHi8INFzdu-XjbUGsgqHqBTPNlNA",
  authDomain: "clone-07-ed52e.firebaseapp.com",
  projectId: "clone-07-ed52e",
  storageBucket: "clone-07-ed52e.appspot.com",
  messagingSenderId: "839061188079",
  appId: "1:839061188079:web:793e22642b98c058fb9a1a",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
