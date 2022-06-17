import React from 'react';
import Home from './pages/Home';
import Navbar from './Shared/Navbar';
import { Routes, Route } from "react-router-dom";
import Login from './auth/Login';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;