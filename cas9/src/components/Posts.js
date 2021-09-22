import React from 'react';
import PropTypes from 'prop-types';

export const Posts = ({listOfPosts}) => {
    console.log(listOfPosts)
    return(
        <div id="posts">
            {listOfPosts.map((post)=>{
                return(
                    <div key={post.id}>
                        <p><span>ID:</span>{post.id}</p>
                        <p><span>Title:</span>{post.title}</p>
                        <p><span>Body:</span>{post.body}</p>
                    </div>
                )
            })}
        </div>
    )
}

Posts.propTypes = {
    listOfPosts:PropTypes.arrayOf(PropTypes.object).isRequired
}