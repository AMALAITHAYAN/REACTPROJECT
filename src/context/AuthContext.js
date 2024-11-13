// src/context/AuthContext.js

import React, { createContext, useState } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const signIn = async (credentials) => {
    try {
      // Fetch all users from db.json
      const response = await axios.get('http://localhost:3000/users');
      const users = response.data;

      // Check if the email and password match any user
      const user = users.find(user => user.email === credentials.email && user.password === credentials.password);

      if (user) {
        setIsAuthenticated(true);
        return true; // Return true on successful sign-in
      } else {
        return false; // Return false if credentials do not match
      }
    } catch (error) {
      console.error('Sign In Error:', error);
      return false; // Return false on failure
    }
  };

  const signUp = async (userData) => {
    try {
      await axios.post('http://localhost:3000/users', userData);
    } catch (error) {
      console.error('Sign Up Error:', error);
    }
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, signIn, signUp }}>
      {children}
    </AuthContext.Provider>
  );
};
