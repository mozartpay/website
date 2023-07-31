import React from 'react';
import { FaExclamationCircle } from 'react-icons/fa';

const FailurePage: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <FaExclamationCircle style={{ fontSize: '100px', color: 'red' }} />
      <h1 style={{ fontSize: '32px', fontWeight: 'bold', marginTop: '20px' }}>Transaction failed !</h1>
      <p style={{ fontSize: '18px', marginTop: '10px' }}>Transaction via Airtm</p>
      <p style={{ fontSize: '18px', marginTop: '10px' }}>Transaction ID :</p>
      <p style={{ fontSize: '18px', marginTop: '10px' }}>Status :</p>
      <p style={{ fontSize: '18px', marginTop: '10px' }}>Amount :</p>
    </div>
  );
};

export default FailurePage;
