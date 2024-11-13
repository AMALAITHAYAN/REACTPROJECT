// src/db.js

// In-memory database for demonstration
const users = []; // This array will store user credentials

export const saveToDatabase = (email, password) => {
  users.push({ email, password });
  return true; // Return true if successful
};

export const checkCredentials = (email, password) => {
  return users.some(user => user.email === email && user.password === password);
};
