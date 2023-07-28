import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const SuccessPage: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <FaCheckCircle style={{ fontSize: '100px', color: 'green' }} />
      <h1 style={{ fontSize: '32px', fontWeight: 'bold', marginTop: '20px' }}>Transaction Approved</h1>
      <p style={{ fontSize: '18px', marginTop: '10px' }}>Transaction via Airtm</p>
    </div>
  );
};

export default SuccessPage;
