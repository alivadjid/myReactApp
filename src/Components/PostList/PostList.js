import React, { useState, useEffect } from 'react'

import './PostList.css'

const PostList = ({postsp, findUser}) => {
    const [posts, setPosts] = useState([])

    useEffect(()=> {
        setPosts(postsp)
    }, [postsp])
    
    
   
    return (
        <div className="posts" id="postList">
            <h4>
                Посты
            </h4>
            <div className="posts__list">
                {
                    posts.map(e=>{
                        return (
                            <div className="posts__list__item" key={e.id}>
                                {findUser(e.userId)}
                                <div className="posts__list__title">
                                    Тема: {e.title}
                                </div>
                                <div className="posts__list__body">
                                    {e.body} 
                                </div>                               
                            </div>
                        )                      
                    })
                }
            </div>
        </div>
    )
}

export default PostList