import React from 'react';

export class ClassComponent extends React.Component {

    constructor(props) {
        super(props);
        console.log("Constructor Called");
        this.state = {
            promenliva1: "Prva Vrednost",
            password:""
        }
    }


    componentDidMount() {
        console.log("Component Did Mount");
    }

    smeniVrednost = () => {
        this.setState({
            promenliva1: "Vtora Vrednost"
        })

    }

    render() {
        console.log("Component Rendered")
        return (
            <div id="class-component">
                <h2>Class Component</h2>
                <p>{this.state.promenliva1}</p>
                <button onClick={this.smeniVrednost} >Smeni Vrednost</button>
                <input
                    type="password"
                    placeholder="Password"
                    value={this.state.password}
                    onChange={(e) => { this.setState({password:e.target.value}) }} // e -> kratenka za event
                />
                <p>Password:{this.state.password}</p>
            </div>
        )
    }
}