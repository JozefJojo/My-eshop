import React from "react";
import LoginButton from "./LoginButton"
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from './LogoutButton';
import RegisterButton from './RegisterButton';
import ProfileButton from './ProfileButton'
import { useLocation } from 'react-router-dom'


const NavigationBar = () => {
  const { isAuthenticated } = useAuth0();
  const location = useLocation()



  const renderProfileButton = () => {

    console.log(location.pathname)
    if (isAuthenticated && location.pathname !== "/profile") {
      return <ProfileButton/>
    }
    return null
  }

  const renderRegisterButton = () => {
    if (isAuthenticated) {
      return null
    }
    return <RegisterButton/>
  }

  const renderButton = () => {
    if (isAuthenticated) {
      return <LogoutButton className="button"/>
    }
    return <LoginButton className="button"/>
  }

  return (
    <nav className='navigation-bar'>
        <h1>
          <a href='/'>My e-shop</a>
        </h1>
      <div style={{flexGrow: 1}}/>
      {renderProfileButton()}
      {renderRegisterButton()}
      {renderButton()}
    </nav>
  )
}

export default NavigationBar;


