
// import { auth, signInWithGooglePopup, createUserDocumentFromAuth, signInWithGoogleRedirect} from "../../utils/firebase/firebase.utils"
// import {useEffect} from 'react'
// import {getRedirectResult} from 'firebase/auth'

import SignUpForm from "../../components/sign-up-form/sign-up-form.component"
import SignInForm from "../../components/sign-in-form/sign-in-form.component"
import "./authentication.styles.scss"


const Authentication = () => {


    // useEffect(async () => {
    //     const response = await getRedirectResult(auth) 
    //     if(response){
    //         const userDocRef = await createUserDocumentFromAuth(response.user)
    //     }
    // }, [])


    // const logGoogleUser = async () => {
    //     const {user} = await signInWithGooglePopup()
    //     const userDocRef = await createUserDocumentFromAuth(user)
    // }

    // const logGoogleRedirectUser = async () => {
    //     const {user} = await signInWithGoogleRedirect()
    //     console.log({user})
    // }

    return (
        <div className="authentication-container">
            {/* <h1>Sign In Page</h1> */}
            {/* <button onClick={logGoogleUser}>
                Sign in with Goolge Popup
            </button> */}
            {/* <button onClick={signInWithGoogleRedirect}>
                Sign in with Goolge Redirect
            </button> */}
            <SignInForm />
            <SignUpForm />
            
            
        </div>
    )

}


export default Authentication