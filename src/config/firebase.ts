import { initializeApp, FirebaseOptions } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig: FirebaseOptions = {
  apiKey: "AIzaSyC3GWlYmR_Lf_mbDlaf4qD_lli7-Ph3fb4",
  authDomain: "chukwudi-ccb98.firebaseapp.com",
  projectId: "chukwudi-ccb98",
  storageBucket: "chukwudi-ccb98.appspot.com",
  messagingSenderId: "777744514477",
  appId: "1:777744514477:web:3fbaad2aa0f1255dcd7524",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
