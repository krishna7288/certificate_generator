import React, { useRef, useState } from 'react';
import './certificateTemplate.css';
import certificateImage from '../asset/Certificate.jpg';
import sign from '../asset/sign.png';
import sign1 from '../asset/sign1.png';
import html2canvas from 'html2canvas'; // Import html2canvas library
import axios from 'axios'; // Import Axios for making HTTP requests
import { useNavigate } from 'react-router';

const CertificateTemplate = ({ studentName, courseName, duration, certificateNumber, dob, mobileNumber }) => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showCancelDialog, setShowCancelDialog] = useState(false);
  
    const certificateRef = useRef(); // Reference to the certificate container
  
    const history = useNavigate();
  
    const handleFormSubmit = async () => {
      setIsSubmitting(true);
      // Generate a canvas from the certificate container
      const canvas = await html2canvas(certificateRef.current, {
        scale: 6, // Increase the scale (e.g., 2 or 3) for higher resolution
        allowTaint: true, // This allows loading images from other origins
        useCORS: true // This uses CORS to load images
      });
  
      // Convert the canvas to a data URL (base64 encoded image)
      const dataURL = canvas.toDataURL('image/png');
  
      // Send the dataURL to the server to generate the PDF and get the download link
      try {
        const response = await axios.post('https://certificateapi.abhiseducampus.com/generate-pdf', {
          dataURL,
          studentName,
          courseName,
          dob,
          mobileNumber,
          duration,
          certificateNumber,
        });
        const downloadLink = response.data.downloadLink;
  
        // Trigger a download for the user
        alert('Certificate generated successfully.');
        console.log('Download link:', downloadLink);
        setIsSubmitting(false);
        history('/certificates');
      } catch (error) {
        console.error('Failed to generate the certificate:', error);
        setIsSubmitting(false);
      }
    };
  
    const handleCancel = () => {
      setShowCancelDialog(true);
    };
  
    const handleConfirmCancel = () => {
      // Perform any additional actions if needed
      window.location.reload(); // Refresh the page
    };
  
    const handleCancelCancel = () => {
      setShowCancelDialog(false);
    };

  return (
    <>
      <div className="certificate-container" ref={certificateRef}>
        <img src={certificateImage} alt="Certificate" className="certificate-image" />
        <div className="header">
          <p className="p">Certificate</p>
          <h3>OF COMPLETION</h3>
          <div className="proudly-presented">
            <p>Proudly Presented To</p>
          </div>
        </div>
        <div className="student-name">
          <p>{studentName}</p>
        </div>
        <div className="course-name">
          <p>Course Name: {courseName}</p>
        </div>
        <div className="duration">
          <p>Duration: {duration}</p>
        </div>
        <div className="branch">
          <p>Branch: Egmore</p>
        </div>
        <div>
          <img src={sign} className="signature" alt="Signature" />
          <img src={sign1} className="signature1" alt="Signature1" />
        </div>
        <div className="signs-container">
          <div className="sign">
            <strong>Bindhu Selvakumar</strong>
            <p>Managing Director</p>
          </div>
          <div className="sign1">
            <strong>Sathishkumar Kannan</strong>
            <p>CEO</p>
          </div>
        </div>
        <div className="CertificateNumber">
          <strong>Reg No: {certificateNumber}</strong>
        </div>
      </div>
      <div className="button-container">
      <div className="actions">
  {isSubmitting ? (
    <button disabled>Submitting...</button>
  ) : (
    <button onClick={handleFormSubmit}>Submit</button>
  )}
</div>
      <div className="actions">
        <button onClick={handleCancel}>Cancel</button>      
   
  </div>
  {showCancelDialog && (
        <div className="cancel-dialog">
          <p>Are you sure you want to cancel?</p>
          <div className="cancel-dialog-actions">
            <button onClick={handleConfirmCancel}>Yes</button>
            <button onClick={handleCancelCancel}>No</button>
          </div>
        </div>
      )}

      </div>
    </>
  );
};

export default CertificateTemplate;