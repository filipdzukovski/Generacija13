import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {logIn} from '../redux/ducks/auth';

export const Login = (props) => {
    const dispatch = useDispatch();
    const [loginData, setLoginData] = useState({
        email:'',
        password:'',
        
    });

    const handleLogin = (e) => {
        e.preventDefault()
        logIn(email,password)(dispatch);
    }

    const {email, password} = loginData;

    return(
       
            <div className='login-form'>
            

                <form className='log-in' onSubmit={handleLogin}>

                <div className="col span-1-of-2">

                <label className='label'>Email</label><br/>
                <input 
                type="text" 
                id='email' 
                className='form-control' 
                placeholder='user@domain.com' 
                value={email} 
                onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}>
                </input>
                <br/>

                <label className='label'>Password</label><br/>
                <input 
                type="password" 
                id='password' 
                className='form-control' 
                placeholder='******' 
                value={password} 
                onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}>
                </input>  
                <br/>

                <button className="btn-lgn" type="submit">Login</button>

                </div>
                
                </form>
             </div>

    )
}

export default Login;