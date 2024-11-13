import React, { useState } from 'react';

const BookPage = () => {
  // State to manage the booking confirmation message
  const [message, setMessage] = useState('');

  // Handle form submission
  const handleBooking = (e) => {
    e.preventDefault(); // Prevents page reload
    setMessage('The room is booked for you!'); // Set the message when the form is submitted
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Hotel Booking</h1>
      <p style={styles.infoText}>Thank you for choosing our hotel! Please provide your details below to complete the booking.</p>
      
      {/* Form for Booking */}
      <form style={styles.form} onSubmit={handleBooking}>
        <div style={styles.formGroup}>
          <label style={styles.label}>Name:</label>
          <input type="text" style={styles.input} placeholder="Your Name" required />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Email:</label>
          <input type="email" style={styles.input} placeholder="Your Email" required />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Room Type:</label>
          <select style={styles.input}>
            <option value="standard">Standard</option>
            <option value="deluxe">Deluxe</option>
            <option value="suite">Suite</option>
          </select>
        </div>

        <button type="submit" style={styles.bookButton}>Book Now</button>
      </form>

      {/* Display confirmation message if set */}
      {message && <p style={styles.confirmationMessage}>{message}</p>}
    </div>
  );
};

export default BookPage;

const styles = {
  container: {
    textAlign: 'center',
    padding: '50px',
  },
  header: {
    marginBottom: '40px',
    fontSize: '2.5em',
    color: '#007bff',
  },
  infoText: {
    marginBottom: '20px',
    fontSize: '1.2em',
  },
  form: {
    maxWidth: '400px',
    margin: '0 auto',
    padding: '20px',
    border: '1px solid #dddddd',
    borderRadius: '8px',
    backgroundColor: '#f8f9fa',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  formGroup: {
    marginBottom: '20px',
  },
  label: {
    display: 'block',
    marginBottom: '10px',
    fontSize: '1.1em',
    textAlign: 'left',
  },
  input: {
    width: '100%',
    padding: '10px',
    fontSize: '1em',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  bookButton: {
    padding: '12px 24px',
    fontSize: '1em',
    backgroundColor: '#007bff',
    color: '#ffffff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  confirmationMessage: {
    marginTop: '20px',
    fontSize: '1.5em',
    color: 'green',
  },
};
