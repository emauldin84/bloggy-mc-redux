import React from 'react'

function BlogList({posts}) {
    // helper function implicitly returns a <p>
    const listItems = Object.values(posts).map(post => <p>{post.title}</p>);
    return(
        <ul>
            {listItems}
        </ul>
    )
}

export default BlogList