import React from 'react';
import './Post.css'

const Post = ({title,body}) => {
    return (
        <div className={'post'}>
            <h5>{title}</h5>
            <h5>{body}</h5>
        </div>
    );
};

export default Post;