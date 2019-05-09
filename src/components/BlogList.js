import React from 'react'

function BlogList({posts}) {
    // helper function implicitly returns a <p>
    // const listItems = Object.values(posts).map(post => <p>{post.title}</p>);

    // if we want the IDs as well as the blog posts,
    // we should get an array of the IDs (using Object.keys)
    // Then, we map over that array.
    // With each id, we can access the blog post in the posts object.
    const listItems = Object.keys(posts).map(id => {
        const theBlogPost = posts[id];
        return <p>{theBlogPost.title} - id:{id}</p>
    })
    return(
        <ul>
            {listItems}
        </ul>
    )
}

export default BlogList