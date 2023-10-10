import React from 'react'
import Navbar from '../../Components/Navbar/Nav'
import { Link } from 'react-router-dom';
import "./AuthPage.css";

const Login = () => {
  return (
    <div className='authpage'>
        <Navbar  reloadnavbar={false} />
        <div className='authcont'>
            <img src='https://images.unsplash.com/photo-1694428276978-32c60b591548?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQ4fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=600&q=60' alt='login' />
            <form className='authform'>
              <h1>Login</h1>
              <div className='formgroup'>
                <label htmlFor='email'>Email</label>
                <input type='email' id='email' />
              </div>
              <div className='formgroup'>
                <label htmlFor='password'>Password</label>
                <input type='password' id='password' />
              </div>
              <Link to='/forgotpassword' className='stylenone'><p>Forgot Password?</p></Link>
              <Link to='/' className='stylenone'><button className='btn'>Login</button></Link>
              <h2 className='or'>OR</h2>
              <Link to='/signup' className='stylenone'><button className='btn'>Signup</button></Link>
            </form>
        </div>
    </div>
  )
}

export default Login