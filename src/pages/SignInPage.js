import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

const SignInPage = () => {
  const { signIn } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(''); // State for error messages
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await signIn({ email, password }); // Await signIn result
    if (success) {
      navigate('/home'); // Redirect to HomePage on successful sign-in
    } else {
      setErrorMessage("Invalid email or password. Please sign up."); // Set error message if sign-in fails
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Sign In</h2>
      <form onSubmit={handleSubmit}>
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
        <button type="submit" style={styles.button}>Sign In</button>
      </form>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>} {/* Display error message */}
      <p style={styles.footer}>
        Don't have an account? <Link to="/signup" style={styles.link}>Sign Up</Link>
      </p>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    padding: '50px',
    backgroundColor: '#000000', // Black background
    color: '#ffffff', // White text for contrast
    height: '100vh', // Full viewport height
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center', // Center content vertically
    alignItems: 'center', // Center content horizontally
  },
  heading: {
    marginBottom: '20px',
    fontSize: '2em',
    color: '#ffffff', // White color for heading
  },
  inputGroup: {
    marginBottom: '20px',
    width: '100%',
    maxWidth: '400px', // Maximum width for form elements
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    fontSize: '1em',
    color: '#ffffff', // White color for labels
  },
  input: {
    width: '100%',
    padding: '15px',
    borderRadius: '8px',
    border: '1px solid #444444', // Dark border
    backgroundColor: '#1a1a1a', // Dark background
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
    fontSize: '1em',
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

export default SignInPage;
