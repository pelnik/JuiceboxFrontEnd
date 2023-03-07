import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from '.';

function Main() {
  return (
    <div className="mainContainer" id="mainContainer">
      <Navbar />
      <Routes>
        <Route path="*" element={<div className="mainContent">Test</div>} />
      </Routes>
      
    </div>

  );
}

export default Main;
