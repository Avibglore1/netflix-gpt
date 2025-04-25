import React from 'react'
import { signOutUser } from '../utils/auth';
import { useNavigate } from 'react-router-dom';
function Header({signIn}) {
  const navigate = useNavigate()
  function handleSignOut(){
    signOutUser();
    navigate('/')
  }
  return (
    <div className='flex justify-between'>
        <img src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" 
        alt="logo" className='w-32'/>
        {!signIn && <button className='mr-6 mt-2 p-2 border border-r-4 rounded-xl shadow-md text-white font-semibold bg-red-500'
        onClick={handleSignOut}>Sign Out</button>}
        
    </div>
  )
}

export default Header