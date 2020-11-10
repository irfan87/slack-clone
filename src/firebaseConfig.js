import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyCBAxTAOuJcnZADkbiJ1JzhBHvK_vsj4DQ",
	authDomain: "slack-clone-3513c.firebaseapp.com",
	databaseURL: "https://slack-clone-3513c.firebaseio.com",
	projectId: "slack-clone-3513c",
	storageBucket: "slack-clone-3513c.appspot.com",
	messagingSenderId: "397908999504",
	appId: "1:397908999504:web:9b88d5f1267e794b32c055",
	measurementId: "G-YR2494G4B6",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

// access firestore cloud / db
const db = firebaseApp.firestore();

// for authentication
const auth = firebase.auth();

// if user want to logged in with Google (or facebook, you name it)
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
