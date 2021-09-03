import React from 'react';

export class StudentClass extends React.Component{

    render(){
        console.log(this.props);
        return(
            <div id="student-class">
                <h2>Student Name: {this.props.ucenik.name} </h2>
                <h5>Student Address: {this.props.ucenik.address} </h5>
                <p>Student Index Number: {this.props.ucenik.indexNum} </p>
            </div>
        )
    }
}