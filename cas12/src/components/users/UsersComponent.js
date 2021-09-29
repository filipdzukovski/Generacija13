import React from 'react';
import PropTypes from 'prop-types';

export function UsersComponent(props){

    console.log(props);
    return(
        <div id="users-component">
           { props.error === undefined ? <table border="1">
               <thead>
                   <tr>
                       <th>Name</th>
                       <th>Username</th>
                       <th>Email</th>
                   </tr>
               </thead>
               <tbody>
                   {props.listOfUsers.map(user=>{
                       return(
                           <tr key={user.id}>
                               <td>
                                   {user.name}
                               </td>
                               <td>
                                   {user.username}
                               </td>
                               <td>
                                   {user.email}
                               </td>
                           </tr>
                       )
                   })}
               </tbody>
           </table> : props.error}
        </div>
    )
}

UsersComponent.propTypes = {
    listOfUsers:PropTypes.arrayOf(PropTypes.object).isRequired,
    error:PropTypes.string
}