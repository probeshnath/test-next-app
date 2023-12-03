import Link from 'next/link';
import React from 'react'

const PostDetail = async ({ params }) => {
    const res = await fetch(`http://localhost:5000/posts/${params.id}`)
    const post = await res.json();

    console.log(params.id)
    return (
        <div>
            <h2 className='text-center text-5xl'>Post Detail page</h2>
            <div className='py-5'>
                <div key={post.id} className="card bg-primary text-primary-content">
                    <div className="card-body">
                        <p>{post.id}</p>
                        <h2 className="card-title">{post.title}!</h2>
                        <p>{post.description}</p>
                        <p>Likes: {post.likes_count}</p>
                        <div className="card-actions justify-end">
                            <Link href={`/posts`}><button className="btn">Back to Home</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostDetail