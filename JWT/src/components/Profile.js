import React from 'react'
import { useDispatch } from 'react-redux';
import { logOut } from '../redux/ducks/auth'

export  function Profile() {
    const dispatch = useDispatch();
     function logOutUser(){
        dispatch(logOut())
    }
    return (
        <div>
            <button onClick={()=>logOutUser()}>Log Out</button>
            <p>
                Hi this is your Profile
            </p>
        </div>
    )
}
