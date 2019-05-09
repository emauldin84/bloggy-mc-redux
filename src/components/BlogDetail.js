import React from 'react'

function BlogDetail({post}) {
    return(
        post ? (
        <div>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
        </div>
        ) : null
    )
}

export default BlogDetail