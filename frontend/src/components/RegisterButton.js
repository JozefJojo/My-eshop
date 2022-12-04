import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";


const RegisterButton = () => {
  const { loginWithRedirect } = useAuth0();


  const handleSignUp = async () => {
    await loginWithRedirect({
      prompt: "login",
      screen_hint: "signup",
      appState: {
        returnTo: "/profile",
      },
      
    });
  };

  return (
    <button className="button" onClick={handleSignUp}>
      Sign Up
    </button>
  );
}

export default RegisterButton