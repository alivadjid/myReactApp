import React, { useState, useEffect, useContext } from 'react'
import PostAdd from '../AddPost'
import { sendPost } from '../../Services'
import {Context} from '../../Context'

import './main.css'

const PostList = ({data: {posts, setPosts}}) => {
  const [newPostnumber, setNewPostnumber] = useState(101)
  
  const { findUser } = useContext(Context)

  function addPost(userId, theme, message){
    setNewPostnumber(e => e + 1)
    sendPost(userId, theme, message, setPosts, newPostnumber)
  }
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
            <PostAdd addPost={addPost}/>
        </div>
    )
}

export default PostList