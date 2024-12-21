import firebase from "firebase/compat/app";

// Add the Firebase products that you want to use
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
	apiKey: "*************************",
	authDomain: "************************",
	projectId: "*****************************",
	storageBucket: "*****************************",
	messagingSenderId: "***********************",
	appId: "*******************************",
	measurementId: "******************",
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


