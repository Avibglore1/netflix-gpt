import React from 'react'
import Login from './Login'
import Browse from './Browse'
import { BrowserRouter,Route,Routes } from 'react-router-dom'

function Body() {
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