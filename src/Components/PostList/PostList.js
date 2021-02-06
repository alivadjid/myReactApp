import React, { useState, useEffect } from 'react'

import './PostList.css'

const PostList = ({postsp}) => {
    const [posts, setPosts] = useState([])
    useEffect(()=> {
        setPosts(postsp)
    }, [postsp])
    
    return (
        <div className="posts">
            <h4>
                Посты
            </h4>
            <div className="posts__list">
                {
                    posts.map(e=>{
                        return (
                            <div className="posts__list__item" key={e.id}>
                                {e.body}
                                {e.userId}
                            </div>
                        )
                            
                        
                    })
                }
            </div>
        </div>
    )
}

export default PostList