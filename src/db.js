import firebase from "firebase/compat/app"
import "firebase/compat/database"
 
const firebaseConfig = {
    // API KEYS
    apiKey: "AIzaSyAO3w4ngtGTTIBJAZZG2vgXC3DsBRLVwl8",
    authDomain: "firechat-18268.firebaseapp.com",
    projectId: "firechat-18268",
    storageBucket: "firechat-18268.appspot.com",
    messagingSenderId: "823767258401",
    appId: "1:823767258401:web:fca69b56c25617a11c5a60"
  };
  
 const db = firebase.initializeApp(firebaseConfig)

export default db;




