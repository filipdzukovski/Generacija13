import React, { useState, useEffect } from 'react';

export const Domasna = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showTable, setShowTable] = useState(false);

    useEffect(() => {
        console.log(`First Name: ${firstName} Last Name: ${lastName} Email: ${email} Password: ${password}`)
    }, [firstName, lastName, email, password])

    return (
        <div id="domasna">
            <input
                type="text"
                placeholder={"First Name"}
                value={firstName}
                onChange={(e) => { setFirstName(e.target.value) }}
            />
            <br />
            <br />
            <input
                type="text"
                placeholder={"Last Name"}
                value={lastName}
                onChange={(e) => { setLastName(e.target.value) }}
            />
            <br />
            <br />
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => { setEmail(e.target.value) }}
            />
            <br />
            <br />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => { setPassword(e.target.value) }}
            />
            <br />
            <br />
            <button onClick={()=>{setShowTable(!showTable)}}>
               { showTable ? "Hide Table" : "Show Table"}
            </button>
            <br />
            <br />
            {showTable &&
                <table border="1">
                    <thead>
                        <tr>
                            <th>
                                First Name
                            </th>
                            <th>
                                Last Name
                            </th>
                            <th>
                                Email
                            </th>
                            <th>
                                Password
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{firstName}</td>
                            <td>{lastName}</td>
                            <td>{email}</td>
                            <td>{password}</td>
                        </tr>
                    </tbody>
                </table>}
        </div>
    )
}