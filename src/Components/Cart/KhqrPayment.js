import React, { useEffect, useState } from 'react';
import QRCode from 'react-qr-code';
import khqrImage from '../assets/KHQR_Stand.png'; // Adjust the path

function KhqrPayment() {
  const [qrData, setQrData] = useState('');
  const [amount, setAmount] = useState(0);
  const [timer, setTimer] = useState(180);

  useEffect(() => {
    // Retrieve data from localStorage
    const paymentData = JSON.parse(localStorage.getItem('khqrPaymentData'));
    if (paymentData) {
      setQrData(paymentData.qrData);
      setAmount(paymentData.amount);
    }
  }, []);

  const formatTimer = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
  };

  useEffect(() => {
    if (timer === 0 || !qrData) return;

    const interval = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timer, qrData]);

  return (
    <div style={{ textAlign: 'center', padding: '20px', background: 'azure', minHeight: '100vh' }}>
      <h1>KHQR Payment</h1>
      {qrData && (
        <div style={{ position: 'relative', display: 'inline-block', width: '100%', maxWidth: '556px' }}>
          <img
            src={khqrImage}
            alt="KHQR Stand"
            style={{ width: '100%', height: 'auto', maxWidth: '556px' }}
          />
          <div
            style={{
              position: 'absolute',
              top: '30%',
              left: '33%',
              transform: 'translate(-50%, -50%)',
              color: 'black',
              fontSize: '1rem',
              fontWeight: 'bold',
            }}
          >
            {amount} USD
          </div>
          <div
            style={{
              position: 'absolute',
              top: '63%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          >
            <QRCode value={qrData} size={window.innerWidth > 600 ? 200 : 150} />
          </div>
          <div
            style={{
              position: 'absolute',
              bottom: '90%',
              left: '70%',
              transform: 'translate(-50%, -50%)',
              color: 'black',
              fontSize: '0.875rem',
              fontWeight: '600',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
            }}
          >
            <span
              style={{
                color: 'black',
                fontSize: '0.875rem',
                fontWeight: '600',
                marginLeft: '-25px',
                animation: 'fade 1s infinite',
              }}
            >
              {formatTimer(timer)}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

export default KhqrPayment;