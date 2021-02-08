import React, { useEffect, useState } from 'react'

import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Users from './Components/Users/Users'
import PostList from './Components/PostList/PostList'
import Loader from './Components/Loader'
import PostAdd from './Components/AddPost'
import Albums from './Components/Albums'
import ShowAlbum from './Components/ShowAlbum'
import {usersUrl, postsUrl, albumsUrl, photosUrl} from './Const'

function getList(url,func, com = ''){
  let urlF = url + com
  fetch(urlF)
    .then((res) => res.json())
    .then(res => func(res))
}

function sendPost(userId, theme, message, setPosts, newPostnumber){
  let obj = {}
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
  .then((json) =>{
    for(let key in json){
      if(key == 'id') {json[key] = newPostnumber}
    }
  setPosts( el => [...el, json])
  })
}

function App() {
  const [users, setUsers] = useState([])
  const [posts, setPosts] = useState([])
  const [newPostnumber, setNewPostnumber] = useState(101)
  const [albums, setAlbums] = useState([])
  const [albumId, setAlbumId] = useState(0)
  const [albumPhotos, setAlbumPhotos] = useState([])
  const [userData, setUserData] = useState('')

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

useEffect(() => {
  console.log(albumPhotos)
}, [albumPhotos])

function addPost(userId, theme, message){
  setNewPostnumber(e => e + 1)
  sendPost(userId, theme, message, setPosts, newPostnumber)
}

function showAlbum(id, userId){
  setAlbumId(id)
  setUserData(findUser(userId))
  let com = `?albumId=${id}`
  getList(photosUrl, setAlbumPhotos, com)
}

let album = albums.length > 0 ? <Albums albums={albums} findUser={findUser} showAlbum={showAlbum}/> : <Loader />
let photos = albumPhotos.length > 0 ? <ShowAlbum albumPhotos={albumPhotos} userData={userData} setAlbumId={setAlbumId}/> : <Loader />
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
        {
          albumId ? 
          photos : 
          album
        }
      </div>
    </div>
  );
}

export default App;
