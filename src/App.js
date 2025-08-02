import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Homepage from './Homepage';
import './App.css';

function App() {
  // 🎯 DEFAULT PAGE SETTING - Change this to set your default page
  const DEFAULT_PAGE = '/home'; // Options: '/home', '/about'

  return (
    <Router>
      <div className="App">
        <Routes>
          {/* ✅ Default redirect - Root path redirects to your chosen default page */}
          <Route path="/" element={<Navigate to={DEFAULT_PAGE} replace />} />
          
          {/* ✅ Available page routes */}
          <Route path="/home" element={<Homepage />} />
          
          {/* ✅ Fallback route - Any unknown route redirects to default page */}
          <Route path="*" element={<Navigate to={DEFAULT_PAGE} replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;