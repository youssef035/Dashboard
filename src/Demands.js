import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Demands.css';

const Demands = () => {
  const [appliedLawyers, setAppliedLawyers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/appliedlawyers')
      .then(response => {
        setAppliedLawyers(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the applied lawyers data!', error);
      });
  }, []);

  const handleRefuse = (id) => {
    axios.delete(`http://localhost:8080/appliedlawyers/${id}`)
      .then(response => {
        setAppliedLawyers(prevLawyers => prevLawyers.filter(lawyer => lawyer.id !== id));
      })
      .catch(error => {
        console.error('Error:', error.response ? error.response.data : error.message);
      });
  };

  const handleApprove = (id) => {
    const lawyerData = appliedLawyers.find(lawyer => lawyer.id === id);
    
    if (lawyerData) {
      axios.post(`http://localhost:8080/appliedlawyers/approve/${id}`, {
        email: lawyerData.Email,  
        lastName: lawyerData.lastName,
        image: lawyerData.image,
        city: lawyerData.City,
        firstName: lawyerData.firstName
      })
      .then(response => {
        console.log('Response:', response.data);
        // Update the state to reflect the approved lawyer
        setAppliedLawyers(prevLawyers => prevLawyers.filter(lawyer => lawyer.id !== id));
      })
      .catch(error => {
        console.error('Error approving lawyer:', error.response ? error.response.data : error.message);
      });
    }
  };

  return (
    <div className="scene">
      <h2>Demands List</h2>
      <div className="demands-grid">
        {appliedLawyers.map((demand, index) => (
          <div className="demand-card" key={index}>
            <img src={demand.image} alt="Profile" className="logo" />
            <div className="demand-info">
              <p><strong>First Name:</strong> {demand.firstName}</p>
              <p><strong>Last Name:</strong> {demand.lastName}</p>
              <p><strong>City:</strong> {demand.City}</p>
              <p><strong>Phone:</strong> {demand.Phone}</p>
              <p><strong>Email:</strong> {demand.Email}</p>
            </div>
            <div className="demand-actions">
              <button className="approve-button" onClick={() => handleApprove(demand.id, demand)}>Approve</button>
              <button className="refuse-button" onClick={() => handleRefuse(demand.id)}>Refuse</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Demands;
