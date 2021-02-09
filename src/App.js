import React, { useEffect, useState } from 'react'

import Navbar from './Components/Navbar'
import Users from './Components/Users'
import PostList from './Components/PostList'
import Loader from './Components/Loader'
import Albums from './Components/Albums'

import {usersUrl, postsUrl, albumsUrl } from './Const'
import {Context} from './Context'
import { getList } from './Services'

import './App.css'


function App() {
  const [users, setUsers] = useState([])
  const [posts, setPosts] = useState([])
  const [albums, setAlbums] = useState([])
  
  useEffect(() => {      
  getList(usersUrl, setUsers)  
  getList(postsUrl, setPosts)
  getList(albumsUrl, setAlbums)
}, [])

function findUser(id){
  let obj
  if (users.length > 0) {
    obj = users.find(val => val.id == id)
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
  } else {
    return <Loader />
  }
  
}

  return (
    <Context.Provider value={{findUser}}>
      <div className="App">
       <Navbar />
      <div className="container">
        {
          users.length > 0 ? <Users users={users}/> : <Loader />        
        }<br/>
        {
          posts.length > 0 ? <PostList data={{posts, setPosts}}/> : <Loader />
        }<br/>
        { albums.length > 0 ? <Albums albums={albums} /> : <Loader /> }
      </div>
    </div>
    </Context.Provider>
    
  );
}

export default App;
