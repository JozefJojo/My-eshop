import React from 'react'
import { useNavigate } from 'react-router-dom';

const ProfileButton = () => {
  const navigate = useNavigate();

  return (
    <button className="button" onClick={() => navigate("/profile")}>Profile</button>
  )
}

export default ProfileButton