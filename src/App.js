import React from 'react';
import { Container } from '@mui/material';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Auth from './components/Auth/Auth';
import PostDetails from './components/PostDetails/PostDetails';
import Chat from './components/ChatPage/ChatPage';



function App() {
  const user = JSON.parse(localStorage.getItem('profile'));
 

  return (
    <BrowserRouter>
      <Container maxWidth="xl">
        <Navbar />
          <Routes>
            <Route path="/" exact Component={() => <Navigate to="/posts" />} />
            {/* <Route path="/" exact Component={Home} /> */}
            <Route path="/posts" exact Component={Home} />
            <Route path="/posts/search" exact Component={Home} />
            <Route path="/posts/:id" exact Component={PostDetails} />            
            <Route path="/auth" exact Component= {() => (!user ? <Auth /> : <Navigate to="/posts" />)} />
            <Route path="/chats" exact Component={Chat} />
          </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
