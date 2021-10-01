import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

export function CommentsComponent(props){

    console.log(props)
    return(
        <div id="comments-component">
            <table border="1">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Body</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {props.listOfComments.map(comment=>{
                        return(
                            <tr key={comment.id}>
                                <td>{comment.id}</td>
                                <td>{comment.name}</td>
                                <td>{comment.email}</td>
                                <td>{comment.body}</td>
                                <td>
                                    <button onClick={()=>props.editComment(comment)}>Edit</button>
                                    <button onClick={()=>props.deleteComment(comment.id)}>Delete</button>
                                    <Link to={`/comment/${comment.id}`}><button>Go to Comment</button></Link>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

CommentsComponent.propTypes = {
    listOfComments: PropTypes.arrayOf(PropTypes.object).isRequired,
    error:PropTypes.string,
    deleteComment: PropTypes.func,
    editComment: PropTypes.func
}