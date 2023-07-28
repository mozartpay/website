import React from 'react';
import { FaTimesCircle } from 'react-icons/fa';

const RejectPage: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <FaTimesCircle style={{ fontSize: '100px', color: 'red' }} />
      <h1 style={{ fontSize: '32px', fontWeight: 'bold', marginTop: '20px' }}>Transaction Canceled !</h1>
      <p style={{ fontSize: '18px', marginTop: '10px' }}>Transaction via Airtm</p>
    </div>
  );
};

export default RejectPage;
