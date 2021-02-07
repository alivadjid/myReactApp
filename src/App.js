import React, { useEffect, useState } from 'react'

import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Users from './Components/Users/Users'
import PostList from './Components/PostList/PostList'
import Loader from './Components/Loader'
import PostAdd from './Components/AddPost'

function getList(url,func){
  fetch(url)
    .then((res) => res.json())
    .then(res => func(res))
}

function sendPost(userId, theme, message, setPosts){
  //setPosts([{userId: 1, id: 1, title:'hello', body:'from' }, {userId: 3, id: 2, title:'привет', body:'от' }])
  fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: theme,
    body: message,
    userId
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => setPosts( el => [...el, json]));
}

function App() {
  const [users, setUsers] = useState([])
  const [posts, setPosts] = useState([])

  useEffect(() => {      
  getList('https://jsonplaceholder.typicode.com/users', setUsers)  
  getList('https://jsonplaceholder.typicode.com/posts', setPosts)
}, [])

function findUser(id, item){
  let obj = users.find(val => val.id == id)
  return (
      <div className="posts__list__info"> 
          <div className="posts__list__username">
              Логин: {obj.username}
          </div>
          <div className="posts__list__email">
              Почта: {obj.email}
          </div>
      </div>
      
  )
}

useEffect(() => {
  console.log(posts)
}, [posts])

function addPost(userId, theme, message){
  sendPost(userId, theme, message, setPosts)
  
}
  return (
    <div className="App">
       <Navbar />
      <div className="container">
        {
          users.length > 0 ? <Users usersp={users}/> : <Loader />        
        }<br/>
        {
          posts.length > 0 ? <PostList postsp={posts} findUser={findUser}/> : <Loader />
        }<br/>
        <PostAdd addPost={addPost}/>
        
      </div>
    </div>
  );
}

export default App;
