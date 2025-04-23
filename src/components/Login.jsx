import React, { useState } from 'react'
import Header from './Header'
function Login() {
    const [isSignIn,setIssignIn] = useState(true);
    const handleSignIn = () =>{
        setIssignIn(!isSignIn);
    }
  return (
    <div className='h-screen relative'>
        <Header/>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/69bec183-9cc8-49d4-8fc2-08228d3c91b4/web/IN-en-20250414-TRIFECTA-perspective_c8273fb1-8860-4ff5-bd1c-c2c4b44d5f2a_medium.jpg" alt="" />
        <form action="" className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
        bg-opacity-50 bg-zinc-950  px-8 py-2 w-full max-w-md text-center '>
            <h1 className='text-left text-white font-bold mb-8 text-4xl'>{isSignIn?"Sign In":"Sign Up"}</h1>
            <div className='space-y-4'>
                {!isSignIn && <div>
                    <input type='text' placeholder='Name' className='w-full bg-zinc-800 border border-zinc-700 text-white
                    p-4 rounded focus:outline-none focus:border-zinc-500'/>
                </div>}
                <div>
                    <input type="text" name="" id="" placeholder='Email or mobile number'
                    className='w-full bg-zinc-800 border border-zinc-700 text-white p-4 rounded focus:outline-none
                    focus:border-zinc-500'/>
                </div>
                <div>
                    <input type="password" name="" id="" placeholder='Password'
                    className='w-full bg-zinc-800 border border-zinc-700 text-white p-4 focus:outline-none
                    focus:border-zinc-500'/>
                </div>
                <div>
                    <button className='w-full bg-red-600 text-white py-3 rounded font-medium hover:bg-red-700 transition-colors'
                    >{isSignIn?"Sign In":"Sign Up"}</button>
                </div>
                <div>
                    <span className='text-zinc-400'>OR</span>
                </div>
                <div>
                    <button className='w-full bg-zinc-700 text-white py-3 rounded font-medium hover:bg-zinc-600 transition-colors'>Use a sign-in code</button>
                </div>
                <div>
                    <a href="#" className='text-white hover:underline'>Forgot password?</a>
                </div>
                {isSignIn && <div>
                    <p className='text-zinc-400'>New to Netflix?
                        <button className='text-white ml-1 border border-r-2 bg-red-700 rounded p-1'
                        onClick={handleSignIn}>Sign up Now</button>
                    </p>
                </div>}
                {!isSignIn && <div>
                    <p className='text-zinc-400'>Already a user?
                        <button className='text-white ml-1 border border-r-2 bg-red-700 rounded p-1'
                        onClick={handleSignIn}>Sign In</button>
                    </p>
                </div>}
                <div className='mt-6 text-xs text-zinc-500'>
                    <p>This page is protected by Google reCAPTCHA to ensure you're not a bot.</p>
                    <a href="#" className='text-blue-500 hover:underline'>Learn more</a>
                </div>
            </div>
        </form>
    </div>
   
  )
}

export default Login