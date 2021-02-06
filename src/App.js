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

  

  return (
    <div className="App">
      <div className="container">
        <Navbar />
        {
          users.length > 0 ? <Users usersp={users}/> : <Loader />        
        }<br/>
        {
          posts.length > 0 ? <PostList postsp={posts}/> : <Loader />
        }
        
      </div>
    </div>
  );
}

export default App;
