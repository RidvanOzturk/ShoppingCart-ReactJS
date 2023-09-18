import React from 'react'
import { useNavigate } from 'react-router-dom';

const NavbarLeft = () => {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate("/")} className='text-6xl'>FBR Shopping</div>
  )
}

export default NavbarLeft