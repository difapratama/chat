import React from 'react';
import Comment from './Comment';

const CommentList = (props) => {
    let data = props.data.map((item, index) => {
        return (
            <Comment
                key={index}
                user={item.user}
                message={item.message}
                id={index}
                onDelete={() => props.deleteChat(item.id)}
            />
        )
    })
    return (
        <ul>
            {data}
        </ul>
    )
}
export default CommentList;