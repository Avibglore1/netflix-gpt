import React from 'react'
import Login from './Login'
import Browse from './Browse'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import appStore from '../utils/appStore'
import { Provider } from 'react-redux'

function Body() {
  return (
    <Provider store = {appStore}>
      <BrowserRouter>
        <Routes>
            <Route path='/' element = {<Login/>}></Route>
            <Route path='/browse' element = {<Browse/>}></Route>
        </Routes> 
      </BrowserRouter>
    </Provider>
    
  )
}

export default Body