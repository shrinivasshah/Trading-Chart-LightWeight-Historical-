import firebase from "firebase/app";
import "firebase/database";
const firebaseConfig = {
  apiKey: "AIzaSyCyyLUtvFbVeHQTxYc3wLgWBtY5uC1tvoU",
  authDomain: "historical-data-9ef01.firebaseapp.com",
  projectId: "historical-data-9ef01",
  storageBucket: "historical-data-9ef01.appspot.com",
  messagingSenderId: "844057285586",
  appId: "1:844057285586:web:eaf5639f0b2733b85f6e0b",
  databaseURL: "https://historical-data-9ef01-default-rtdb.firebaseio.com",
};

export default firebase.initializeApp(firebaseConfig);
