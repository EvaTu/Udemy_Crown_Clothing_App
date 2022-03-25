import {initializeApp} from 'firebase/app'
import {getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyD2jfGnpvJvnyYIwtIM3caNfOIvoeRzi8Y",
    authDomain: "crwn-clothing-db-ae183.firebaseapp.com",
    projectId: "crwn-clothing-db-ae183",
    storageBucket: "crwn-clothing-db-ae183.appspot.com",
    messagingSenderId: "551754647024",
    appId: "1:551754647024:web:3282f16e43826f89c8c935"
  };
  
  // Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider =new GoogleAuthProvider()
provider.setCustomParameters({
    prompt: "select_account"
})

export const auth =getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth,provider)