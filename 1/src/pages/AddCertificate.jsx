import React, { useState } from "react";
import "./addCertificate.css";
import Sidebar from "../components/Sidebar";
import CertificateTemplate from "./CertificateTemplate";

const AddCertificates = () => {
  const [studentName, setStudentName] = useState("");
  const [dob, setDateOfBirth] = useState("");
  const [courseName, setCourseName] = useState("");
  const [duration, setDuration] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [certificateNumber, setCertificateNumber] = useState("");
  const [showCertificate, setShowCertificate] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const courseOptions = [
    "Full Stack Development",
    "Digital Marketing",
    "Software Testing",
    "PG in Full Stack Development",
    "PG in Digital Marketing",
  ];
  const durationOptions = ["2 Months", "3 Months", "6 Months"];

  const handleSubmit = () => {
    // Check if all form fields are filled before generating the certificate
    if (
      studentName &&
      dob &&
      courseName &&
      duration &&
      mobileNumber &&
      certificateNumber
    ) {
      setIsLoading(true); // Set loading to true while the certificate is being generated
      setTimeout(() => {
        setIsLoading(false); // Simulating a delay, you can replace this with actual certificate generation logic
        setShowCertificate(true); // Show the CertificateTemplate component
      }, 2000); // 2 seconds delay (you can adjust this as needed)
    } else {
      alert(
        "Please fill all the form fields before generating the certificate."
      );
    }
  };

  return (
    <Sidebar>
      {isLoading ? ( // If loading is true, show the loading message
        <div className="loading-container">
          <div className="loading-message">Loading...</div>
        </div>
      ) : showCertificate ? ( // If the certificate is ready, show the CertificateTemplate component
        <CertificateTemplate
          studentName={studentName}
          courseName={courseName}
          duration={duration}
          certificateNumber={certificateNumber}
          dob={dob}
          mobileNumber={mobileNumber}
        />
      ) : (
        <form onSubmit={handleSubmit} className="student-form">
          <label>
            Student Name:
            <input
              type="text"
              value={studentName}
              onChange={(e) => setStudentName(e.target.value)}
              pattern="^[A-Za-z\s]+$" // Regular expression to allow only letters and spaces
              required
              title="Please enter a valid name"
            />
          </label>

          <label>
            Date of Birth:
            <input
              type="date"
              value={dob}
              onChange={(e) => setDateOfBirth(e.target.value)}
              required
            />
          </label>

          <label>
            Course Name:
            <select
              value={courseName}
              onChange={(e) => setCourseName(e.target.value)}
              name="course"
              required
            >
              <option value="" disabled>
                Select Course
              </option>
              {courseOptions.map((course, index) => (
                <option key={index} value={course}>
                  {course}
                </option>
              ))}
            </select>
          </label>

          <label>
            Duration:
            <select
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              name="duration"
              required
            >
              <option value="" disabled>
                Select{" "}
              </option>
              {durationOptions.map((duration, index) => (
                <option key={index} value={duration}>
                  {duration}
                </option>
              ))}
            </select>
          </label>

          <label>
            Mobile Number:
            <input
              type="text"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              pattern="[0-9]*" // Regular expression to allow only numbers
              required
              title="Please enter numbers only"
            />
          </label>

          <label>
            Certificate Number:
            <input
              type="text"
              value={certificateNumber}
              onChange={(e) => setCertificateNumber(e.target.value)}
              required
            />
          </label>

          <button type="submit">Generate Certificate</button>
        </form>
      )}
    </Sidebar>
  );
};

export default AddCertificates;
