import React, { useEffect, useState } from 'react'

import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Users from './Components/Users/Users'
import PostList from './Components/PostList/PostList'
import Loader from './Components/Loader'

function getList(url,func){
  fetch(url)
    .then((res) => res.json())
    .then(res => func(res))
}

function App() {
  const [users, setUsers] = useState([])
  const [posts, setPosts] = useState([])

  useEffect(() => {      
  getList('https://jsonplaceholder.typicode.com/users', setUsers)  
  getList('https://jsonplaceholder.typicode.com/posts', setPosts)
}, [])

function getUser(userId) {
  console.log(users.find(e => e.id == userId))
}
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
        
        
      </div>
    </div>
  );
}

export default App;
