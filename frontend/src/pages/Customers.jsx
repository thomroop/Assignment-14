import { useEffect, useState } from 'react';
import api from '../services/api';

const Customers = () => {
  const [customers, setCustomers] = useState([]);

  const fetchCustomers = async () => {
    try {
      const res = await api.get('/customers');
      setCustomers(res.data);
    } catch (err) {
      alert('Error fetching customers');
    }
  };

  useEffect(() => {
    fetchCustomers();
  }, []);

  return (
    <div>
      <h2>Customer List</h2>
      {customers.map((c) => (
        <div key={c._id}>
          <p>Name: {c.name}</p>
          <p>Email: {c.email}</p>
        </div>
      ))}
    </div>
  );
};

export default Customers;

