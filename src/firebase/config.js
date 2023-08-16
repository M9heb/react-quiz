import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyD9-qaaaViU269fCa9Divowyuit4CIPz_U",
  authDomain: "react-quiz-1215c.firebaseapp.com",
  projectId: "react-quiz-1215c",
  storageBucket: "react-quiz-1215c.appspot.com",
  messagingSenderId: "570691666083",
  appId: "1:570691666083:web:19c83b991cbccd41faff16",
};

initializeApp(firebaseConfig);

const db = getFirestore();
export { db };
