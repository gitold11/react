import React, {useEffect, useState} from 'react';
import Comment from "../comment/Comment";

const Comments = () => {

    const [comments, setComments] = useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(value => value.json())
            .then(value => setComments(value))
    },[])

    return (
        <div>
            {comments.map(value => <Comment key={value.id} name={value.name} body={value.body}/>)}
        </div>
    );
};

export default Comments;