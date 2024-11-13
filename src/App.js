// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import HomePage from './pages/HomePage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import PrivateRoute from './components/PrivateRoute';
import BookPage from './pages/BookPage'; // Import BookPage

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/signin" />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          {/* Use PrivateRoute to protect the HomePage */}
          <Route path="/home" element={<PrivateRoute element={<HomePage />} />} />
          {/* Route for the booking page */}
          <Route path="/book" element={<BookPage />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
