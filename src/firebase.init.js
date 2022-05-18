// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC612Xly0Oo-1q--GPcfL07EyXuzWT0ABw",
  authDomain: "todo-list-e8603.firebaseapp.com",
  projectId: "todo-list-e8603",
  storageBucket: "todo-list-e8603.appspot.com",
  messagingSenderId: "547344401210",
  appId: "1:547344401210:web:3db7a0de34f8e02616c603"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth