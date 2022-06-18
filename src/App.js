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
import StudentAccount from './pages/StudentAccount';
import CompanyAccount from './pages/CompanyAccount';
import RequiredAuth from './auth/RequiredAuth';


const App = () => {
  return (
    <div>
      <Navbar />
      <Toaster />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register/:id' element={<Register />} />


        <Route path='/post-job' element={<RequiredAuth><PostAJob /></RequiredAuth>} />
        <Route path='/find-job' element={<RequiredAuth><FindAJob /></RequiredAuth>} />
        <Route path='/job-details' element={<RequiredAuth><JobDetails /></RequiredAuth>} />
        <Route path='/applications' element={<RequiredAuth><Applications /></RequiredAuth>} />
        <Route path='/applicants' element={<RequiredAuth><Applicants /></RequiredAuth>} />
        {/* required for login or signup */}
        <Route path='/student-account' element={<RequiredAuth><StudentAccount /></RequiredAuth>} />
        <Route path='/company-account' element={<RequiredAuth><CompanyAccount /></RequiredAuth>} />

      </Routes>
    </div>
  );
};

export default App;