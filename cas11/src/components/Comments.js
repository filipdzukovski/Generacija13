import React,{useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {fetchCommentsRequest} from './../actions/CommentsActions';

export const Comments = () => {

    const dispatch = useDispatch();
    const comments = useSelector(state=>state.CommentsReducer.comments);

    useEffect(()=>{
        dispatch(fetchCommentsRequest())
    },[dispatch])

    return (
        <div id="comments">
            <h2>Comments: {comments.length}</h2>
        </div>
    )
}