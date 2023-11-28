import React, { useState, useEffect } from 'react';
import './certificate.css';
import Axios from 'axios';
import { MdDelete } from 'react-icons/md';
import Sidebar from '../components/Sidebar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Certificates = () => {
  const [students, setStudents] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredStudents, setFilteredStudents] = useState([]);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await Axios.get('https://certificateapi.abhiseducampus.com/students');
      setStudents(response.data);
    } catch (error) {
      console.error('Failed to fetch students:', error);
    }
  };

  useEffect(() => {
    filterStudents();
  }, [searchQuery, students]);

  const filterStudents = () => {
    const query = searchQuery.toLowerCase();
    const filteredData = students.filter((student) => {
      const { student_name, mobile_number } = student;
      const formattedStudentName = student_name?.toLowerCase() || '';
      const formattedMobileNumber = mobile_number?.toString().toLowerCase() || '';

      return (
        formattedStudentName.includes(query) ||
        formattedMobileNumber.includes(query)
      );
    });
    setFilteredStudents(filteredData);
  };

  const handleDelete = (name) => {
    Axios.delete(`https://certificateapi.abhiseducampus.com/api/students/${name}`)
      .then((response) => {
        console.log('Student deleted successfully');
        toast.success('Deleted successfully', {
          position: 'top-center',
          autoClose: 4000,
        });
        fetchStudents();
      })
      .catch((error) => {
        console.error('Failed to delete student:', error);
      });
  };

  const viewCertificate = (url) => {
    const fullURL = `https://certificateapi.abhiseducampus.com/${url}`;
    window.open(fullURL, '_blank');
  };

  const handleSearch = (e) => {
    const searchValue = e.target.value;
    setSearchQuery(searchValue);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear().toString();
    return `${day}-${month}-${year}`;
  };

  return (
    <Sidebar>
      <div>
        <input
          type="text"
          placeholder="Search by student name"
          value={searchQuery}
          onChange={handleSearch}
        />
        <table className="table">
          <thead>
            <tr>
              <th>Serial No</th>
              <th>Student Name</th>
              <th>Date of Birth</th>
              <th>Course Name</th>
              <th>Duration</th>
              <th>Mobile Number</th>
              <th>Certificate Number</th>
              <th>Certificate File</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.map((student, index) => (
              <tr key={student._id}>
                <td>{index + 1}</td>
                <td>{student.student_name}</td>
                <td>{formatDate(student.dob)}</td>
                <td>{student.course_name}</td>
                <td>{student.duration}</td>
                <td>{student.mobile_number}</td>
                <td>{student.certificate_number}</td>
                <td>
                  {student.certificate_file && (
                    <button
                      onClick={() => viewCertificate(student.certificate_file)}
                    >
                      View Certificate
                    </button>
                  )}
                </td>
                <td>
                  <button onClick={() => handleDelete(student.student_name)}>
                    <MdDelete />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ToastContainer className="toast-container" />
    </Sidebar>
  );
};

export default Certificates;
