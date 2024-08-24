import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
	apiKey: "AIzaSyD0w2P9BeOzQUcfgJOvood3o5EqAvMqGbs",
	authDomain: "sionapp-8efe9.firebaseapp.com",
	databaseURL: "https://sionapp-8efe9-default-rtdb.firebaseio.com",
	projectId: "sionapp-8efe9",
	storageBucket: "sionapp-8efe9.appspot.com",
	messagingSenderId: "1033501993672",
	appId: "1:1033501993672:web:089d6eeb1663cb453093fd",
	measurementId: "G-1XBCP3KVC2",
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
export { db }
