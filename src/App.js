import React from 'react';
import './App.css';
import { Button } from 'react-bootstrap';
import Follower from './Components/Follower';
import MainProfile from './Components/MainProfile';
import Following from './Components/Following';
import { BrowserRouter, Route, Router, Routes,Navigate } from "react-router-dom";
function App() {
  return (
     <>
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<MainProfile/>}/>
        <Route exact path="/follower" element={<Follower/>}/>
        <Route exact path="/following" element={<Following/>}/>
      </Routes>
    </BrowserRouter>
     </>
  );
}

export default App;
