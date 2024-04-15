// import { useState } from 'react'
import './App.css'
import logo from './assets/logo.png'

function Signin() {

    return (
        <>
            <div className="logo"><img src={logo}/></div>
            <h1>Sign in </h1>
            <button className='signin-button' type="button">Sign in with Google</button>
            <form>
                <label><br />
                    Username or Email Address<br />
                    <input className='blank-space'
                        type="email"
                    />
                </label>
                <label> <br />
                    Password  <a href="/sign-in">forget password</a><br />
                    <input className='blank-space'
                        type="password"
                    />
                </label><br /><br />
                <button className='signin-button' type="button">Create Account</button>
            </form>
            <p>
                No Account? <a href="/sign-up">Sign Up</a>
            </p>
        </>
    )
}

export default Signin;
