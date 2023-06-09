import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyBql_3kaJZizyIa5LswDO85cvuCSaoqe14",
  authDomain: "cms-ticket-7c35d.firebaseapp.com",
  projectId: "cms-ticket-7c35d",
  storageBucket: "cms-ticket-7c35d.appspot.com",
  messagingSenderId: "563507909506",
  appId: "1:563507909506:web:e4bb88095ae63a9dedf59b"
};

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const auth = getAuth(app)
export const storage = getStorage(app)