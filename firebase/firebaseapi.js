import firebase from "firebase/compat/app";

// Add the Firebase products that you want to use
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyDHuimlN-DA9zWth9JU2Ic-ekmI8hiBgoE",

	authDomain: "tccfesa-e0ef2.firebaseapp.com",
  
	projectId: "tccfesa-e0ef2",
  
	storageBucket: "tccfesa-e0ef2.firebasestorage.app",
  
	messagingSenderId: "438448737693",
  
	appId: "1:438448737693:web:705ffea495a24efc627374"
  
};

// Check if Firebase has already been initialized
if (!firebase.apps.length) {
	// Initialize Firebase
	firebase.initializeApp(firebaseConfig);
}

// Export Firebase services
const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth };


