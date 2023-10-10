import React from 'react'
import Navbar from '../../Components/Navbar/Nav';
import {Link} from 'react-router-dom';

import "./AuthPage.css";

const Signup = () => {
  return (
    <div className=''>
        <Navbar  reloadnavbar={false} />  
        <div className='authcont'>
            <img src='https://images.unsplash.com/photo-1694428276978-32c60b591548?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQ4fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=600&q=60' alt='signup' />
            <form className='authform'>
              <h1>Signup</h1>
              <div className='form-group-row'>
                <div className='formgroup'>
                  <label htmlFor='fname'>First Name</label>
                  <input type='text' id='fname' />
                </div>
                <div className='formgroup'>
                  <label htmlFor='lname'>Last Name</label>
                  <input type='text' id='lname' />
                </div>
              </div>
              <div className='formgroup'>
                <label htmlFor='email'>Email</label>
                <input type='email' id='email' />
              </div>
              <div className='form-group-row'>
                <div className='formgroup'>
                  <label htmlFor='password'>Password</label>
                  <input type='password' id='password' />
                </div>
                <div className='formgroup'>
                  <label htmlFor='cpassword'>Confirm Password</label>
                  <input type='password' id='password' />
                </div>
              </div>
              <Link to='/login' className='stylenone'><p>Already have an account?</p></Link>
              <Link to='/signup' className='stylenone'><button className='btn'>Signup</button></Link>
            </form>
        </div>  
    </div>
  )
}

export default Signup