import React from "react";
import LoginButton from "./LoginButton"
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from './LogoutButton';
import RegisterButton from './RegisterButton';


const NavigationBar = () => {
  const { isAuthenticated } = useAuth0();

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
      <RegisterButton/>
      {renderButton()}
    </nav>
  )
}

export default NavigationBar;


