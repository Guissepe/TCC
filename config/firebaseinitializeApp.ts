// import { firebaseConfig } from "./firebaseConfig";
import { initializeApp } from "firebase/app";
import * as firebase from 'firebase/app';
import 'firebase/firestore';
// import { firebase } from "@react-native-firebase/auth";
import { getFirestore, collection, addDoc, getDocs, doc, setDoc  } from "firebase/firestore";
import { Auth } from "firebase-admin/lib/auth/auth";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBUUY9vuKvPoCRHKblrGxEsDshv7fuThUk",
  authDomain: "fir-busdv.firebaseapp.com",
  projectId: "fir-busdv",
  storageBucket: "fir-busdv.appspot.com",
  messagingSenderId: "515743794167",
  appId: "1:515743794167:web:ff9ce02fed5f45565524f2",
  measurementId: "G-HJM46QE3NK"
};

const app = firebase.initializeApp(firebaseConfig)

const db = getFirestore(app)

// db.collection("cities").doc("JA").set({
//   name: "Japan",
//   state: "asd",
//   country: "dfgdfg"
// })
// .then(() => {
//   console.log("Document successfully written!");
// })
// .catch((error) => {
//   console.error("Error writing document: ", error);
// });

// const docRef = await addDoc(collection(db, "cities"), {
//   name: "Tokyo",
//   country: "Japan",
//   state: "chingchangling"
// });
// console.log("Document written with ID: ", docRef.id)

const cityRef = doc(db, 'Cidadãos', 'luiz');
setDoc(cityRef, { name: 'Luiz', email: 'luizfelipebrustolin62@gmail.com' }, { merge: true });

const colRef = doc(db, 'User', 'Nathan', 'email', 'nome')
setDoc(colRef, { name: 'Nathan', email: '@gmail.com' });

console.log(getDocs)

const auth = getAuth();
export {app, db, auth}

