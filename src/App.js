import React from 'react';
import Home from './pages/Home';
import Navbar from './Shared/Navbar';
import { Routes, Route } from "react-router-dom";
import Login from './auth/Login';
import Register from './auth/Register';
import PostAJob from './pages/PostAJob';
import Applications from './pages/Applications';
import Applicants from './pages/Applicants';
import FindAJob from './pages/FindAJob';
import JobDetails from './pages/JobDetails';
import { Toaster } from 'react-hot-toast';


const App = () => {
  return (
    <div>
      <Navbar />
      <Toaster />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register/:id' element={<Register />} />
        <Route path='/post-job' element={<PostAJob />} />
        <Route path='/find-job' element={<FindAJob />} />
        <Route path='/job-details' element={<JobDetails />} />
        <Route path='/applications' element={<Applications />} />
        <Route path='/applicants' element={<Applicants />} />
      </Routes>
    </div>
  );
};

export default App;