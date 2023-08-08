import React, { useState, useEffect } from 'react';
import { FaExclamationCircle } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';
import axios from 'axios'; 

function formatDate(isoDate: string | undefined): string {
  if (!isoDate) return '';
  const date = new Date(isoDate);
  return date.toISOString().split('T')[0];
}

const FailurePage: React.FC = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const code = searchParams.get('code');

  const [purchase, setPurchase] = useState<any>(null);

  useEffect(() => {
    axios.get(`https://mozart-api-21ea5fd801a8.herokuapp.com/api/airtm/fetch/${code}`)
      .then((response) => {
        setPurchase(response.data.purchase);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [code]);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <FaExclamationCircle style={{ fontSize: '100px', color: 'red' }} />
      <h1 style={{ fontSize: '32px', fontWeight: 'bold', marginTop: '20px' }}>Transaction failed !</h1>
      <p style={{ fontSize: '18px', marginTop: '10px' }}>Transaction via Airtm</p>
      <p style={{ fontSize: '18px', marginTop: '10px' }}>Transaction ID: {purchase?.id}</p>
      <p style={{ fontSize: '18px', marginTop: '10px' }}>Amount: {purchase?.amount}</p>
      <p style={{ fontSize: '18px', marginTop: '10px' }}>Date: {formatDate(purchase?.created_at)}</p>
      <p style={{ fontSize: '18px', marginTop: '10px' }}>Status: {purchase?.status}</p>
    </div>
  );
};

export default FailurePage;
