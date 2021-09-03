import React from 'react';

export function Comments(props) {

    console.log(props)
    return(
        <div id="comments">
        {props.hasComments === true ? <h2>This component contains comments</h2> :
            <p>These are not the comments you're looking for</p>}
        
        {props.multipleComments && <h2>It does have multiple Comments by {props.student.name}</h2>}

        </div>
    )
}