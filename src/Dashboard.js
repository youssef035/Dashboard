import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Dashboard.css';

const Dashboard = () => {
  const [totalLawyers, setTotalLawyers] = useState(0);
  const [totalClients, setTotalClients] = useState(0);

  useEffect(() => {
    axios.get('http://localhost:8080/lawyers')
      .then(response => {
        const lawyers = response.data;
        setTotalLawyers(lawyers.length);
      })
      .catch(error => {
        console.error('Smthg went wrong ', error);
      });

    axios.get('http://localhost:8080/clients')
      .then(response => {
        const clients = response.data;
        setTotalClients(clients.length);
      })
      .catch(error => {
        console.error('smthg went wrong ', error);
      });
  }, []);

  return (
    <div className="dashboard">
      <div className="card">
        <h2>Total Clients</h2>
        <p>{totalClients}</p>
      </div>
      <div className="card">
        <h2>Total Lawyers</h2>
        <p>{totalLawyers}</p>
      </div>
      <div className="card">
        <h2>Revenue</h2>
        <p>0</p>
      </div>
    </div>
  );
};

export default Dashboard;
