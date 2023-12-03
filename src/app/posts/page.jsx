import React from 'react'

const Posts = async () => {
    const res = await fetch("http://localhost:5000/posts",{
        cache: "no-store"

        // cache: "force-cache"

        // next:{
        //     revalidate: 5,
        // }

        
})
const posts = await res.json();
    // console.log(posts)
    return (
        <div>
            <h2 className='text-3xl'>Total Posts: {posts.length} </h2>
            <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
                {
                    posts.map(post => (
                        <div key={post.id} className="card bg-primary text-primary-content">
                            <div className="card-body">
                                <h2 className="card-title">{post.title}!</h2>
                                <p>{post.description}</p>
                                <p>Likes: {post.likes_count}</p>
                                <div className="card-actions justify-end">
                                    <button className="btn">See More</button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Posts