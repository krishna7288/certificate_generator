import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import './form.css';

const MyForm = () => {
  const [certificateID, setCertificateID] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [certificateURL, setCertificateURL] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send a request to the backend to check the certificate in the database
      const response = await axios.post('https://certificateapi.abhiseducampus.com/api/certificates', {
        certificateID,
        dateOfBirth,
      });

      // Check if the response status is okay
      if (response.status === 200) {
        const data = response.data;
        if (data.certificateURL) {
          setCertificateURL(data.certificateURL);
          setFormSubmitted(true); // Set formSubmitted to true after successful submission
        } else {
          // Handle the case when the certificate is not found
          console.log('Certificate not found');
        }
      } else {
        // Handle non-OK response here (e.g., 404)
        console.error('Error fetching certificate:', response.status);
      }
    } catch (error) {
      // Handle any errors that occurred during the API call
      console.error('Error fetching certificate:', error);
    }
  };

  // Function to handle downloading the certificate in a new tab
  const handleDownload = () => {
    // Open the certificate URL in a new tab
    window.open(`https://certificateapi.abhiseducampus.com${certificateURL}`, '_blank');
  };

  return (
    <>
      <div className='logo'>
        {/* <img src={logo} alt="Logo"/> */}
      </div>
      <div className='container'>
        {/* Conditionally render the form or certificate section based on formSubmitted */}
        {!formSubmitted ? (
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="certificateID">
              <Form.Label>Certificate ID</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Certificate ID"
                value={certificateID}
                onChange={(e) => setCertificateID(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="dateOfBirth">
              <Form.Label>Date of Birth</Form.Label>
              <Form.Control
                type="date"
                placeholder="dd/mm/yyyy"
                value={dateOfBirth}
                onChange={(e) => setDateOfBirth(e.target.value)}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
            </Form>
        ) : (
          certificateURL && (
            <div className="certificate-section">
              <div className="certificate-wrapper">
                <h2>Certificate</h2>
                <iframe className="certificate-iframe" src={`https://certificateapi.abhiseducampus.com${certificateURL}`} title="Certificate Viewer" />
                <Button variant="primary" onClick={handleDownload}>
                  Download Certificate
                </Button>
              </div>
            </div>
          )
        )}
      </div>
    </>
  );
};

export default MyForm;