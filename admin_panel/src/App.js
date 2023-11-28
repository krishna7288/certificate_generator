import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard.jsx';
import AddCertificates from './pages/AddCertificate';
import Certificates from './pages/Certificate';
import Login from './pages/Login';
import CertificateTemplate from './pages/AddCertificate';
import { isMobile } from 'react-device-detect';


const App = () => {
  if (isMobile) {
    return (
      <div>
        <p>This website is only accessible on desktop devices.</p>
      </div>
    );
  }
  return (
    <BrowserRouter>
     
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path='/addCertificates' element={<AddCertificates />}/>
          <Route path='/certificates' element={<Certificates />} />
          <Route path='/certificatetemplate' element={<CertificateTemplate />} />
          
        </Routes>
     
    </BrowserRouter>
  );
};

export default App;