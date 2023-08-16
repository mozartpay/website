import React, { useState, useEffect } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

function formatDate(isoDate: string | undefined): string {
  if (!isoDate) return '';
  const date = new Date(isoDate);
  return date.toISOString().split('T')[0];
}

const SuccessPage: React.FC = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const code = searchParams.get('code');

  const [purchase, setPurchase] = useState<any>(null);

  const handleMarkCreated = async () => {
    try {
      const response = await fetch(`https://mozart-api-21ea5fd801a8.herokuapp.com/api/airtm/confirmed/${code}`, {
        method: 'PATCH',
      });

      if (response.ok) {
        console.log('Purchase status updated to confirmed');
      } else {
        console.error('Failed to update purchase status');
      }
    } catch (error) {
      console.error('Error updating purchase status:', error);
    }
  };
  useEffect(() => {
    axios.get(`https://mozart-api-21ea5fd801a8.herokuapp.com/api/airtm/fetch/${code}`)
      .then((response) => {
        setPurchase(response.data.purchase);
      })
      .catch((error) => {
        console.error(error);
      });


    handleMarkCreated()
  }, [code]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <FaCheckCircle style={{ fontSize: '100px', color: 'green' }} />
      <h1 style={{ fontSize: '32px', fontWeight: 'bold', marginTop: '20px' }}>Transaction Approved</h1>
      <p style={{ fontSize: '18px', marginTop: '10px' }}>Transaction via Airtm</p>
      <p style={{ fontSize: '18px', marginTop: '10px' }}>Transaction ID: {purchase?.id}</p>
      <p style={{ fontSize: '18px', marginTop: '10px' }}>Amount: {purchase?.amount}</p>
      <p style={{ fontSize: '18px', marginTop: '10px' }}>Date: {formatDate(purchase?.created_at)}</p>
      <p style={{ fontSize: '18px', marginTop: '10px' }}>Status: {purchase?.status}</p>
    </div>
  );
};

export default SuccessPage;
