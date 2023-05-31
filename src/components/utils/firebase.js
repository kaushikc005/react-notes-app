
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCQXlcz90h9cnwqdrbcAe2UMCtrsqHvHM4",
  authDomain: "notes-app-react-6fa60.firebaseapp.com",
  projectId: "notes-app-react-6fa60",
  storageBucket: "notes-app-react-6fa60.appspot.com",
  messagingSenderId: "339702140381",
  appId: "1:339702140381:web:6537323c1bd94bfea3ba34"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const db = getFirestore(app)
export const notesCollectionRef = collection(db, "notes")
export const auth = getAuth(app);