import React from 'react';
import { Routes, Route } from 'react-router-dom';

function Main() {
  return (
    <Routes>
      <Route path="/" element={<div>Test</div>} />
    </Routes>
  );
}

export default Main;
