import React, { useEffect } from 'react'
import { signOutUser } from '../utils/auth';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice';
import { auth } from '../utils/firebase';
import { LOGO_URL } from '../utils/constant';
function Header({signIn}) {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  function handleSignOut(){
    signOutUser();
  }

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,(user)=>{
      if(user){
        const {uid,email,displayName} = user;
        dispatch(addUser({uid,email,displayName}))
        navigate('/browse')
      }else{
        dispatch(removeUser());
        navigate('/')
      }
    })
    return unsubscribe
  },[])

  return (
    <div className='flex justify-between'>
        <img src= {LOGO_URL}
        alt="logo" className='w-32'/>
        <div className='flex justify-end gap-3'>
          {!signIn && <button className='p-2 border border-r-4 rounded-xl shadow-md text-white font-semibold bg-gray-600'
          >GPT Search </button>}
          {!signIn && <button className='mr-6  p-2 border border-r-4 rounded-xl shadow-md text-white font-semibold bg-red-500'
          onClick={handleSignOut}>Sign Out</button>}
        </div>
        
        
    </div>
  )
}

export default Header