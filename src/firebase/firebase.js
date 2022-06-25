import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'



const firebaseConfig = {
    apiKey: "AIzaSyBmYKP1q9dnspUB3R4LisPx9s3hdAcgFY4",
    authDomain: "gwsport-ce703.firebaseapp.com",
    databaseURL: "https://gwsport-ce703-default-rtdb.firebaseio.com",
    projectId: "gwsport-ce703",
    storageBucket: "gwsport-ce703.appspot.com",
    messagingSenderId: "477139404355",
    appId: "1:477139404355:web:29faf580af02602a5e36f6",
    measurementId: "G-HZ955S9H10"
}

// Initialize Firebase and Firebase Authentication
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)

export { auth, db }