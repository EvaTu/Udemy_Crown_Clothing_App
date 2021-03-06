// import {useState, useContext} from 'react'
import {useState} from 'react'
import FormInput from "../form-input/form-input.component"
import {createAuthUserWithEmailAndPassword, createUserDocumentFromAuth} from "../../utils/firebase/firebase.utils"
import "./sign-up-form.styles.scss"
import Button from "../button/button.component"
// import {UserContext} from "../../contexts/user.context"


const defaultFormFields = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""
}

//const {setCurrentUser} = useContext(UserContext)
//it was inside below formFields but being uncomment out because firebase Observer pattern

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields)
    const {displayName, email, password, confirmPassword} = formFields
    

    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    }
    
    const handleChange = (event) => {
        const{name, value} = event.target
        setFormFields({...formFields, [name]: value})
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        if(password !== confirmPassword) {
            alert("passwords do not match")
            return
        }

        // setCurrentUser(user) //It was inside try{} but being uncomment out because firebase Observer pattern
        try{
            const {user} = await createAuthUserWithEmailAndPassword(email, password)
            await createUserDocumentFromAuth(user, {displayName})
            resetFormFields()
        }catch(error){
            if(error.code === "auth/email-already-in-use"){
                alert("Cannot create user, email already in use!")
            }else{
                console.log("user creation encountered an error",error)
            }
            
        }
    }
    // console.log(formFields)

    return(
        <div className="sign-up-container">
            <h2>Don't have an account?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
                
                <FormInput label="Display Name" name="displayName" type="text" required onChange={handleChange} value={displayName}/>
                
                <FormInput label="Email" name="email" type="email" required onChange={handleChange} value={email}/>
                
                <FormInput label="Password" name="password" type="password" required onChange={handleChange} value={password}/>

                <FormInput label="Comfirm Password"name="confirmPassword"type="password"required onChange={handleChange} value={confirmPassword}/>

                <Button type="submit">Sign Up</Button>
            </form>
        </div>
    )

}

export default SignUpForm

