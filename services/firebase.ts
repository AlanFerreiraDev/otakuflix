import { getApp, getApps, initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyDYFiVWeJPWht1HwTqNw9kMYUf057AftDw',
  authDomain: 'otakuflix-288ff.firebaseapp.com',
  projectId: 'otakuflix-288ff',
  storageBucket: 'otakuflix-288ff.appspot.com',
  messagingSenderId: '859392281114',
  appId: '1:859392281114:web:3873da705b74831d67dfa3',
  measurementId: 'G-4L3FY03EN8',
}

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()

const auth = getAuth(app)
const db = getFirestore(app)
const storage = getStorage(app)

export { auth, db, storage }
