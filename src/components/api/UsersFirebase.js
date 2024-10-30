import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDQDiQQgZTpgK_yYPt3bO7fQZa6HNmVFH8",
  authDomain: "my-api-xei9yl.firebaseapp.com",
  projectId: "my-api-xei9yl",
  storageBucket: "my-api-xei9yl.appspot.com",
  messagingSenderId: "58137323797",
  appId: "1:58137323797:web:177e700f9365e005db611c"
};

const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
export const db=getFirestore(app)
export default app;