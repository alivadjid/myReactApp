import React, { useEffect, useState } from 'react'

import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Users from './Components/Users/Users'
import PostList from './Components/PostList/PostList'

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
        <Users usersp={users}/>
        <PostList postsp={posts}/>
      </div>
    </div>
  );
}

export default App;
