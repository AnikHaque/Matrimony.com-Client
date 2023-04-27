// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_apiKey,
//   authDomain: process.env.REACT_APP_authDomain,
//   projectId: process.env.REACT_APP_projectId,
//   storageBucket: process.env.REACT_APP_storageBucket,
//   messagingSenderId: process.env.REACT_APP_messagingSenderId,
//   appId: process.env.REACT_APP_appId,
// };
const firebaseConfig = {
  apiKey: "AIzaSyBSVUVRgdUs7uAMsbEf-YcM8pzps0P56XU",
  authDomain: "marriage-website-a05d0.firebaseapp.com",
  projectId: "marriage-website-a05d0",
  storageBucket: "marriage-website-a05d0.appspot.com",
  messagingSenderId: "4961430175",
  appId: "1:4961430175:web:c254c13aca5e9c466350aa"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
