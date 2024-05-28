import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Clients.css'; // Add appropriate styling

const Clients = () => {
  const [clients, setClients] = useState([]);
  const [selectedClient, setSelectedClient] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:8080/clients')
      .then(response => {
        setClients(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the client data!', error);
      });
  }, []);

  const handleRowClick = (client) => {
    setSelectedClient(client);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedClient(null);
  };

  return (
    <div className="scene">
      <h2>Clients Page</h2>
      <table className="clients-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Email</th>
            <th>Genre</th>
            <th>Nom</th>
            <th>Prenom</th>
            <th>Tel</th>
            <th>Ville</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client) => (
            <tr key={client.id} onClick={() => handleRowClick(client)}>
              <td>{client.date}</td>
              <td>{client.email}</td>
              <td>{client.genre}</td>
              <td>{client.nom}</td>
              <td>{client.prenom}</td>
              <td>{client.tel}</td>
              <td>{client.ville}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {isModalOpen && selectedClient && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Client Details</h3>
            <p><strong>Date:</strong> {selectedClient.date}</p>
            <p><strong>Email:</strong> {selectedClient.email}</p>
            <p><strong>Genre:</strong> {selectedClient.genre}</p>
            <p><strong>Nom:</strong> {selectedClient.nom}</p>
            <p><strong>Prenom:</strong> {selectedClient.prenom}</p>
            <p><strong>Tel:</strong> {selectedClient.tel}</p>
            <p><strong>Ville:</strong> {selectedClient.ville}</p>
            <p><strong>Lawyer ID:</strong> {selectedClient.lawyerId}</p>
            <p><strong>Payment Intent ID:</strong> {selectedClient.paymentIntentId}</p>
            <p><strong>Payment Status:</strong> {selectedClient.paymentStatus}</p>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Clients;
