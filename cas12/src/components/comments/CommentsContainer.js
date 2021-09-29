import React,{useEffect} from 'react';
import {CommentsComponent} from './CommentsComponent'
import { useSelector,useDispatch } from 'react-redux';
import { commentsOperations } from './duck';

export default function CommentsContainer(){

    const dispatch = useDispatch();
    const comments = useSelector(state=>state.commentsReducer.comments);
    const error = useSelector(state=>state.commentsReducer.message); 

    useEffect(()=>{
        dispatch(commentsOperations.fetchComments())
    },[dispatch])

    return(
        <div id="comments-container">
            <CommentsComponent listOfComments = {comments} error={error}/>
        </div>
    )
}