import FormInput from "../form-input/form-input.component"
import Button, {BUTTON_TYPE_CLASSES} from "../button/button.component"
import "./sign-in-form.styles.scss"
// import {useState, useContext} from 'react'
import {useState} from 'react'
import {signInWithGooglePopup, createUserDocumentFromAuth, signInAuthUserWithEmailAndPassword} from "../../utils/firebase/firebase.utils"
// import {UserContext} from "../../contexts/user.context"


const defaultFormFields = {
    email: "",
    password: "",
}


//const {setCurrentUser} = useContext(UserContext)
//it was inside below formFields but being uncomment out because firebase Observer pattern

const SignInForm = () =>{
    const [formFields, setFormFields] = useState(defaultFormFields)
    const {email, password} = formFields

    

    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    }

    // await createUserDocumentFromAuth(user) //was inside signInWithGoogle but move to user.context
    // const {user} = await signInWithGooglePopup()
    const signInWithGoogle = async () => {
        await signInWithGooglePopup()
        // setCurrentUser(user) //it was inside try{} but being uncomment out because firebase Observer pattern
    }

    const handleChange = (event) => {
        const{name, value} = event.target
        setFormFields({...formFields, [name]: value})
    }


    const handleSubmit = async (event) => {
        event.preventDefault()
        
        //setCurrentUser(user) //it was inside try{} but being uncomment out because firebase Observer pattern
        try{
            const {user} = await signInAuthUserWithEmailAndPassword(email,password)
            
            resetFormFields()
        }catch(error){
            switch(error.code){
                case "auth/wrong-password": 
                    alert("incorrect password for email")
                    break
                case "auth/user-not-found": 
                    alert("no user associated with this email")
                    break
                default: 
                console.log(error)
            }
            
           console.log(error)
        }
    }
    

        return(
            <div className="sign-in-container">
                <h2>Already have an account?</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={handleSubmit}>
                <FormInput label="Email" name="email" type="email" required onChange={handleChange} value={email}/>
                <FormInput label="Password" name="password" type="password" required onChange={handleChange} value={password}/>
                
                <div className="buttons-container">
                <Button type="submit">Sign In</Button>
                <Button type="button" buttonType={BUTTON_TYPE_CLASSES.google} onClick={signInWithGoogle}>Google sign in</Button>
                </div>
                </form>
            </div>
        )

}

export default SignInForm