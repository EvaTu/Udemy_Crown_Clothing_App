import { Outlet, Link } from 'react-router-dom'
import {ReactComponent as CrwnLogo} from "../../assets/crown.svg" 
import {useContext} from 'react'
import "./navigation.styles.scss"
import {UserContext} from "../../contexts/user.context"
import {signOutUser} from "../../utils/firebase/firebase.utils"


const Navigation = () =>{
  const { currentUser} = useContext(UserContext)
  // const { currentUser, setCurrentUser } = useContext(UserContext)
  // console.log(currentUser)
  // const signOutHandler = async() =>{
  //   const resp = await signOutUser()
  //   setCurrentUser(null)
  // }

    return(
      <>
        <div className="navigation">
          <Link className="logo-container" to="/">
            <CrwnLogo className="logo"/>
          </Link>
          
          <div className="nav-links-container">
            {currentUser ? 
              <span className="nav-link" onClick={signOutUser}>SIGN OUT</span> : <Link className="nav-link" to="/auth">SIGN IN</Link>
            }
              <Link className="nav-link" to="/shop">SHOP</Link>
              
          </div>
        </div>
        <Outlet/>
      </>
  
    )
  
  }

export default Navigation