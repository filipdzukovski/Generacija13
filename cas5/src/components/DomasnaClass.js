import React from 'react';

export class DomasnaClass extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            showTable:false
        }
    }


    handleInput = (event) =>{
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    render() {

        return (
            <div id="domasna-class">
                <input
                    type="text"
                    placeholder={"First Name"}
                    name="firstName"
                    value={this.state.firstName}
                    onChange={this.handleInput}
                />
                <br />
                <br />
                <input
                    type="text"
                    placeholder={"Last Name"}
                    name={"lastName"}
                    value={this.state.lastName}
                    onChange={this.handleInput}
                />
                <br />
                <br />
                <input
                    type="email"
                    placeholder="Email"
                    name={"email"}
                    value={this.state.email}
                    onChange={this.handleInput}
                />
                <br />
                <br />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={this.state.password}
                    onChange={this.handleInput}
                />
                <br />
                <br />
                <button onClick={() => { this.setState({showTable:!this.state.showTable}) }}>
                    {this.state.showTable ? "Hide Table" : "Show Table"}
                </button>
                <br />
                <br />
                {this.state.showTable &&
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
                                <td>{this.state.firstName}</td>
                                <td>{this.state.lastName}</td>
                                <td>{this.state.email}</td>
                                <td>{this.state.password}</td>
                            </tr>
                        </tbody>
                    </table>}
            </div>
        )
    }
}