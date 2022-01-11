import React from 'react';
import './Comment.css'

const Comment = ({name,body}) => {
    return (
        <div className={'comment'}>
            <h5>{name}</h5>
            <h5>{body}</h5>
        </div>
    );
};

export default Comment;