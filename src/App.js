import React, { useEffect, useState } from 'react'

import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Users from './Components/Users/Users'
import PostList from './Components/PostList/PostList'
import Loader from './Components/Loader'
import PostAdd from './Components/AddPost'
import Albums from './Components/Albums'

import {usersUrl, postsUrl, albumsUrl } from './Const'
import {Context} from './Context'
import { getList, sendPost } from './Services'




function App() {
  const [users, setUsers] = useState([])
  const [posts, setPosts] = useState([])
  const [newPostnumber, setNewPostnumber] = useState(101)
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

// useEffect(() => {
//   console.log(albumPhotos)
// }, [albumPhotos])

function addPost(userId, theme, message){
  setNewPostnumber(e => e + 1)
  sendPost(userId, theme, message, setPosts, newPostnumber)
}




let album = albums.length > 0 ? <Albums albums={albums} /> : <Loader /> //<Albums showAlbum={showAlbum} />
//let photos = albumPhotos.length > 0 ? <ShowAlbum albumPhotos={albumPhotos} userData={userData} setAlbumId={setAlbumId}/> : <Loader />

  return (
    <Context.Provider value={{findUser}}>
      <div className="App">
       <Navbar />
      <div className="container">
        {
          users.length > 0 ? <Users users={users}/> : <Loader />        
        }<br/>
        {
          posts.length > 0 ? <PostList posts={posts}/> : <Loader />
        }<br/>
        <PostAdd addPost={addPost}/>
        { album }
        {/* {
          albumId ? 
          photos : 
          album
        } */}
      </div>
    </div>
    </Context.Provider>
    
  );
}

export default App;
