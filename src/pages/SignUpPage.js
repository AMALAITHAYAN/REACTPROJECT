// src/pages/SignUpPage.js

import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

const SignUpPage = () => {
  const { signUp } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Mock sign-up process
    if (password === confirmPassword) {
      await signUp({ email, password }); // Sign up the user
      navigate('/signin'); // Redirect to Sign In page after signing up
    } else {
      alert('Passwords do not match. Please try again.');
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Sign Up</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Confirm Password:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            style={styles.input}
          />
        </div>
        <button type="submit" style={styles.button}>Sign Up</button>
      </form>
      <p style={styles.footer}>
        Already have an account? <Link to="/signin" style={styles.link}>Sign In</Link>
      </p>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    padding: '50px',
    background: 'linear-gradient(to right, #000000, #434343)', // Black to dark gray gradient
    color: '#ffffff', // White text
    height: '100vh', // Full viewport height
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center', // Center content vertically
    alignItems: 'center', // Center content horizontally
  },
  heading: {
    marginBottom: '30px',
    fontSize: '2.5em',
    color: '#ffffff', // White color for heading
  },
  form: {
    width: '100%',
    maxWidth: '500px', // Maximum width for form
    backgroundColor: '#1a1a1a', // Dark background for form
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)', // Shadow effect
  },
  inputGroup: {
    marginBottom: '20px',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    fontSize: '1.2em',
    color: '#ffffff', // White color for labels
  },
  input: {
    width: '100%',
    padding: '15px',
    borderRadius: '8px',
    border: '1px solid #444444', // Dark border
    backgroundColor: '#333333', // Dark input background
    color: '#ffffff', // White text
    fontSize: '1em',
    transition: 'border-color 0.3s', // Smooth transition for border color on focus
  },
  button: {
    padding: '15px 25px',
    backgroundColor: '#007bff', // Blue background
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '1.2em',
    transition: 'background-color 0.3s, transform 0.3s', // Smooth transition for hover effects
  },
  footer: {
    marginTop: '20px',
    color: '#ffffff', // White color for footer text
  },
  link: {
    color: '#007bff', // Blue color for links
    textDecoration: 'none',
    fontWeight: 'bold',
  },
};

export default SignUpPage;
