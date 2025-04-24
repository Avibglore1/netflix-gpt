import React, { useEffect } from 'react'
import Login from './Login'
import Browse from './Browse'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { onAuthStateChanged } from 'firebase/auth'
import { addUser, removeUser } from '../utils/userSlice'
import { auth } from '../utils/firebase'

function Body() {
  const dispatch = useDispatch();

  useEffect(()=>{
    onAuthStateChanged(auth,(user)=>{
      if(user){
        const {uid,email,displayName} = user;
        console.log('email:',email,'displayName:',displayName,'uid:',uid)
        dispatch(addUser({uid,email,displayName}))
      }else{
        dispatch(removeUser())
      }
    })
  },[])

  return (
      <BrowserRouter>
        <Routes>
            <Route path='/' element = {<Login/>}></Route>
            <Route path='/browse' element = {<Browse/>}></Route>
        </Routes> 
      </BrowserRouter>
  )
}

export default Body