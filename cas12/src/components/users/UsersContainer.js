import React,{useEffect} from 'react';
import {UsersComponent} from './UsersComponent';
import {useDispatch,useSelector} from 'react-redux';
import {usersOperations} from './duck';

export default function UsersContainer(){

    const users = useSelector(state=>state.usersReducer.users);
    const error = useSelector(state=>state.usersReducer.message);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(usersOperations.fetchUsers())
    },[dispatch])

    return(
        <div id="users-container">
            <UsersComponent listOfUsers={users} error={error} />
        </div>
    )
}