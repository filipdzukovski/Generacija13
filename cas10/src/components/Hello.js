import React from 'react';
import {connect} from 'react-redux';
import {sayGoodbye, sayHello} from './../actions/SayHelloActions';

class Hello extends React.Component{


    componentDidMount(){
        this.props.getGreeting();
    }

    render(){
        return(
            <div id="hello">
                <h2>Hello {this.props.greeting} </h2>
                <p>{this.props.bye}</p>
                <button onClick={()=>{this.props.sayBye()}}>Say Bye</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        greeting: state.SayHelloReducer.greeting,
        bye:state.SayHelloReducer.bye
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getGreeting: ()=>{
            dispatch(sayHello())
        },
        sayBye: ()=>{
            dispatch(sayGoodbye())
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Hello);