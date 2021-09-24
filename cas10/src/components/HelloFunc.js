import React,{useEffect} from 'react';
import {sayHello,sayGoodbye} from './../actions/SayHelloActions';
import {useDispatch,useSelector} from 'react-redux';

export function HelloFunc(){

    const dispatch = useDispatch();
    const greeting = useSelector(state=> state.SayHelloReducer.greeting);
    const bye = useSelector(state=> state.SayHelloReducer.bye);

    useEffect(()=>{
        dispatch(sayHello());
    },[dispatch])

    return(
        <div id="hello-func">
            <h2>Hello {greeting}</h2>
            <p>{bye}</p>
            <button onClick={()=>{dispatch(sayGoodbye())}}>Bye !</button>
        </div>
    )
}