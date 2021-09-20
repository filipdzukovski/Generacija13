import React, { useEffect, useState } from 'react';
import { About } from './About';
import { Contact } from './Contact';
import { Info } from './Info';
import { Route, Switch } from 'react-router-dom';
import { Nav } from './Nav';
import { Users } from './Users';
import { UserList } from './UserList';
import axios from 'axios';

export const App = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios({
            url: 'https://jsonplaceholder.typicode.com/users',
            method: 'GET'
        })
            .then(result => {
                console.log(result)
                setUsers(result.data);
            })
            .catch(err => {
                alert(err);
            })
    }, [])

    return (
        <div id="app">
            <Nav />

            <Switch> {/* url = variable "/about/contact" */}
                <Route exact path="/about" component={About} />
                <Route path="/about/contact" component={Contact} />
                <Route path='/info' render={() => {
                    return <Info info={"This is Info Component"} />
                }} />
                <Route path="/users" component={Users} />
                <Route path="/user-list" render={() => {
                    return <UserList users={users} />
                }} />
            </Switch>
        </div>
    )
}