import React from 'react'
import Home from "../Pages/Home/Home";
import { BrowserRouter as Router,Routes, Route, Link  } from "react-router-dom";
import { Library } from '../Pages/Library/Library';
import Subscription from '../Pages/Subscription/Subscription';
import Shorts from '../Pages/Shorts/Shorts';
import VideoPage from '../Pages/VideoPage/VideoPage';
import VideoCall from '../Pages/VideoCall/VideoCall';
import Room from '../Pages/VideoCall/Room';

const AllRoutes = () => {
  return (
 <Routes>
   <Route path='/' element={  <Home/>}/>
   <Route path='/Library' element={  <Library/>}/>
   <Route path='/Subscription' element={  <Subscription/>}/>
   <Route path='/Shorts' element={  <Shorts/>}/>
   <Route path='/VideoPage/:id' element={  <VideoPage/>}/>
   <Route path='/VideoCall' element={  <VideoCall/>}/>

   <Route path='/room/:id' element={  <Room/>}/>
 </Routes>
  )
}

export default AllRoutes
