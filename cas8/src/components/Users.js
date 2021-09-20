import React,{useEffect,useState} from 'react';

export const Users = () => {

    const [users,setUsers] = useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(result=> result.json())
        .then(json=> setUsers(json))
        .catch(err=> alert(err))
    },[])

    return (
        <div id="users">
          { users.length > 0 ? <table border="1">
                <thead>
                    <tr>
                        <th>Name</th>

                        <th>Username</th>

                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user)=>{
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
            </table> : <h2>Loading...</h2>}
        </div>
    )
}