import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Albums } from './Albums';
import { Posts } from './Posts';
import { API_URL } from './../constants';
import { Nav } from './Nav';
import {Gallery} from './Gallery';

export function App() {

  const [posts, setPosts] = useState([]);
  const [photos, setPhotos] = useState([]);
  const [selectedPhoto,setSelectedPhoto] = useState({});

  useEffect(() => {
    //posts
    fetch(`${API_URL}/posts`)
      .then(res => res.json())
      .then(json => setPosts(json))
      .catch(err => {
        alert(err);
      })
    //photos
    fetch(`${API_URL}/photos`)
      .then(res =>res.json())
      .then(json =>setPhotos(json))
      .catch(err => { alert(err) })
  }, [])

  function openPhoto(photo){
    setSelectedPhoto(photo)
  }
  function closePhoto(){
    setSelectedPhoto({});
  }

  function deletePhoto(){
    setPhotos([...photos.filter(item=> item.id !== selectedPhoto.id)]);
    setSelectedPhoto({});
  } 

  return (
    <div id="app">
      <Nav />
      <Switch>
        <Route path="/albums" component={Albums} />
        <Route path="/posts" render={() => {
          return <Posts listOfPosts={posts} />
        }} />
        <Route path="/gallery" render={()=>{
          return <Gallery photoList={photos} 
                          openPhoto={openPhoto} 
                          selectedImage={selectedPhoto.url} 
                          closePhoto={closePhoto} 
                          deletePhoto={deletePhoto} />
        }} />
      </Switch>
    </div>
  )
}