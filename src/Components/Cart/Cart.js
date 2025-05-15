// import React, { useContext, useState, useEffect } from 'react';
// import './Cart.css';
// import { CartContext } from './CartContext';
// import axios from 'axios';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import Swal from 'sweetalert2';
// import { QRCode } from 'react-qr-code';
// import khqrLogo from './khqr-5.png';
// import qr from './icon.png';
// import Popup from 'reactjs-popup';
// import 'reactjs-popup/dist/index.css';
// import 'yocto-queue';
// import { downloadInvoicePDF } from './invoice';
// import Loader from './lander/Loader'; // Import the Loader component

// function Cart() {
//   const { cartItems, removeFromCart, updateCartItem } = useContext(CartContext);
//   const [name, setName] = useState('');
//   const [address, setAddress] = useState('');
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [province, setProvince] = useState('');
//   const [note, setNote] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const [txnId, setTxnId] = useState('');
//   const [initResponse, setInitResponse] = useState(null);
//   const [statusResponse, setStatusResponse] = useState(null);
//   const [isChecking, setIsChecking] = useState(false);
//   const [isQRCodeShown, setIsQRCodeShown] = useState(false);
//   const [isPopupOpen, setIsPopupOpen] = useState(false);

//   // Calculate totals considering discount prices
//   const calculateTotals = () => {
//     const subtotal = cartItems.reduce((total, item) => {
//       const price = item.discountPrice && item.discountPrice < item.price 
//         ? item.discountPrice 
//         : item.price;
//       return total + price * item.quantity;
//     }, 0);
//     const shipping = 1.5;
//     const total = subtotal + shipping;
//     return { subtotal, shipping, total };
//   };

//   const { subtotal, shipping, total } = calculateTotals();

//   const handleCheckout = async () => {
//     if (!name || !address || !phoneNumber || !province) {
//       toast.error('Please fill in your name, address, phone number, and province before proceeding.');
//       return;
//     }

//     setIsLoading(true);

//     try {
//       await handleInitTransaction(total);
//       setIsQRCodeShown(true);
//       setIsPopupOpen(true);
//     } catch (error) {
//       console.error('Error processing order:', error);
//       toast.error('Failed to process order. Please try again.');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleInitTransaction = async (total) => {
//     try {
//       const response = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/init-transaction`, { total });
//       setInitResponse(response.data);
//       setTxnId(response.data.data.txn_id);
//       setIsChecking(true);
//     } catch (error) {
//       console.error("Error initializing transaction:", error);
//       toast.error('Failed to initialize payment. Please try again.');
//     }
//   };

//   const handleCheckStatus = async () => {
//     try {
//       const response = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/check-status`, { txnId });
//       setStatusResponse(response.data);

//       if (response.data.data.txn_status === 'SUCCESS' || response.data.data.txn_status === 'FAILED') {
//         setIsChecking(false);
//       }

//       if (response.data.data.txn_status === 'SUCCESS') {
//         const invoiceData = {
//           name,
//           address,
//           phoneNumber,
//           province,
//           note,
//           subtotal,
//           shipping,
//           total,
//           items: cartItems.map(item => ({
//             ...item,
//             productImage: item.images ? item.images[0] : item.image,
//             effectivePrice: item.discountPrice && item.discountPrice < item.price 
//               ? item.discountPrice 
//               : item.price
//           })),
//         };

//         const invoiceResponse = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/invoice`, invoiceData);
//         if (invoiceResponse.status === 201) {
//           toast.success('Order processed successfully!');

//           for (const item of cartItems) {
//             await axios.post(`${process.env.REACT_APP_PRODUCT_API_BASE_URL}/api/products/purchase/${item._id}`, {
//               quantity: item.quantity,
//               size: item.size,
//             });
//           }

//           Swal.fire({
//             title: 'Payment Successful!',
//             text: 'Your order will be Delivery in 24h. Would you like to download your invoice?',
//             icon: 'success',
//             showCancelButton: true,
//             confirmButtonText: 'Download PDF',
//             cancelButtonText: 'Close',
//             confirmButtonColor: '#3085d6',
//             cancelButtonColor: '#d33',
//             buttonsStyling: true
//           }).then((result) => {
//             if (result.isConfirmed) {
//               downloadInvoicePDF(cartItems, name, address, phoneNumber, province, note, subtotal, shipping, total, txnId);
//               // window.location.href = process.env.REACT_APP_FRONTEND_BASE_URL;
//             } else {
//               window.location.href = process.env.REACT_APP_FRONTEND_BASE_URL;
//             }
//           });
//         }
//       }

//       if (response.data.data.txn_status === 'FAILED') {
//         toast.error('Error processing order');
//       }
//     } catch (error) {
//       console.error("Error checking transaction status:", error);
//     }
//   };

//   const displayItemPrice = (item) => {
//     if (item.discountPrice && item.discountPrice < item.price) {
//       return (
//         <p>
//           <span style={{ textDecoration: 'line-through', color: '#999', marginRight: '5px' }}>
//             ${item.price.toFixed(2)}
//           </span>
//           <span style={{ color: '#e91e63' }}>
//             ${item.discountPrice.toFixed(2)}
//           </span>
//         </p>
//       );
//     }
//     return <p>Price: ${item.price.toFixed(2)}</p>;
//   };

//   useEffect(() => {
//     let intervalId;
//     if (isChecking) {
//       intervalId = setInterval(handleCheckStatus, 3000);
//     }
//     return () => clearInterval(intervalId);
//   }, [isChecking, txnId]);

//   useEffect(() => {
//     if (statusResponse && statusResponse.data.txn_status === 'FAILED') {
//       Swal.fire({
//         title: 'Payment Failed',
//         text: 'Your payment could not be processed. Please try again.',
//         icon: 'error',
//         confirmButtonText: 'OK',
//       });
//     }
//   }, [statusResponse]);

//   return (
//     <div className="cart-page">
//       <h1>Shopping Cart</h1>
//       <div className="cart-container">
//         <div className="cart-items">
//           {cartItems.map((item) => (
//             <div key={item._id} className="cart-item">
//               <div className="item-image">
//                 <img src={item.images ? item.images[0] : item.image} alt={item.name} />
//               </div>
//               <div className="item-details">
//                 <h3>{item.name}</h3>
//                 {displayItemPrice(item)}
//                 <div className="quantity-selection">
//                   <label>Quantity:</label>
//                   <div className="quantity-control">
//                     <button 
//                       onClick={() => updateCartItem(item._id, { quantity: item.quantity - 1 })}
//                       disabled={item.quantity <= 1}
//                     >-</button>
//                     <span>{item.quantity}</span>
//                     <button 
//                       onClick={() => updateCartItem(item._id, { quantity: item.quantity + 1 })}
//                     >+</button>
//                   </div>
//                 </div>
//                 <button className="remove-item" onClick={() => removeFromCart(item._id)}>Remove</button>
//               </div>
//               <div className="item-total">
//                 <p>
//                   ${(item.discountPrice && item.discountPrice < item.price 
//                     ? item.discountPrice * item.quantity 
//                     : item.price * item.quantity).toFixed(2)}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="cart-summary">
//           <h2>Order Summary</h2>
//           <div className="summary-details">
//             <p>Subtotal: ${subtotal.toFixed(2)}</p>
//             <p>Delivery: ${shipping.toFixed(2)}</p>
//             <hr />
//             <h3>Total: ${total.toFixed(2)}</h3>
//           </div>

//           <div className="checkout-form">
//             <h3>Shipping Details</h3>
//             <div className="form-group">
//               <label htmlFor="name">Name</label>
//               <input
//                 type="text"
//                 id="name"
//                 placeholder="Enter your name"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 required
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="province">Province (Required)</label>
//               <select
//                 id="province"
//                 value={province}
//                 onChange={(e) => setProvince(e.target.value)}
//                 required
//               >
//                 <option value="">Select Province</option>
//                 <option value="Banteay Meanchey">Banteay Meanchey</option>
//                 <option value="Battambang">Battambang</option>
//                 <option value="Kampong Cham">Kampong Cham</option>
//                 <option value="Kampong Chhnang">Kampong Chhnang</option>
//                 <option value="Kampong Speu">Kampong Speu</option>
//                 <option value="Kampong Thom">Kampong Thom</option>
//                 <option value="Kampot">Kampot</option>
//                 <option value="Kandal">Kandal</option>
//                 <option value="Kep">Kep</option>
//                 <option value="Koh Kong">Koh Kong</option>
//                 <option value="Kratie">Kratie</option>
//                 <option value="Mondulkiri">Mondulkiri</option>
//                 <option value="Oddar Meanchey">Oddar Meanchey</option>
//                 <option value="Pailin">Pailin</option>
//                 <option value="Phnom Penh">Phnom Penh</option>
//                 <option value="Preah Sihanouk">Preah Sihanouk</option>
//                 <option value="Preah Vihear">Preah Vihear</option>
//                 <option value="Prey Veng">Prey Veng</option>
//                 <option value="Pursat">Pursat</option>
//                 <option value="Ratanakiri">Ratanakiri</option>
//                 <option value="Siem Reap">Siem Reap</option>
//                 <option value="Stung Treng">Stung Treng</option>
//                 <option value="Svay Rieng">Svay Rieng</option>
//                 <option value="Takeo">Takeo</option>
//                 <option value="Tboung Khmum">Tboung Khmum</option>
//               </select>
//             </div>
//             <div className="form-group">
//               <label htmlFor="address">Address</label>
//               <input
//                 type="text"
//                 id="address"
//                 placeholder="Enter your address"
//                 value={address}
//                 onChange={(e) => setAddress(e.target.value)}
//                 required
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="phone">Phone Number</label>
//               <input
//                 type="tel"
//                 id="phone"
//                 placeholder="Enter your phone number"
//                 value={phoneNumber}
//                 onChange={(e) => setPhoneNumber(e.target.value)}
//                 required
//                 className="no-zoom"
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="note">Note (Optional)</label>
//               <textarea
//                 id="note"
//                 placeholder="Add any special instructions or notes here"
//                 value={note}
//                 onChange={(e) => setNote(e.target.value)}
//                 rows="4"
//               />
//             </div>
//           </div>

//           <div className="form-group">
//             <label>KHQR Payment</label>
//             <img src={khqrLogo} alt="KHQR Payment QR Code" className="khqr-logo" />
//           </div>
//           <div className="cart-actions">
//             <button
//               className="checkout-button"
//               onClick={handleCheckout}
//               disabled={!name || !address || !phoneNumber || !province || isLoading || isQRCodeShown}
//             >
//               {isLoading ? (
//                 <div className="button-loader">
//                   <Loader />
//                   <span>Processing...</span>
//                 </div>
//               ) : (
//                 'Checkout'
//               )}
//             </button>
//           </div>
//         </div>
//       </div>

//       <Popup
//         open={isPopupOpen}
//         onClose={() => {}}
//         modal
//         closeOnDocumentClick={false}
//         closeOnEscape={false}
//         contentStyle={{ padding: '20px', borderRadius: '10px' }}
//       >
//         <div className="popup-content">
//           {initResponse && (
//             <div className="transaction-details">
//               <div className="qr-code-container">
//                 <img src={qr} alt="KHQR Background" className="khqr-background" />
//                 <div className="qr-code-overlay">
//                   <QRCode value={initResponse.data.qr} size={150} />
//                 </div>
//                 <div className="total-overlay">{total.toFixed(2)} USD</div>
//               </div>
//               <h3>Scan QR Code to Pay</h3>
//             </div>
//           )}
//         </div>
//       </Popup>
//     </div>
//   );
// }

// export default Cart;






import React, { useContext, useState, useEffect } from 'react';
import './Cart.css';
import { CartContext } from './CartContext';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2';
import { QRCode } from 'react-qr-code';
import khqrLogo from './khqr-5.png';
import qr from './icon.png';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import 'yocto-queue';
import { downloadInvoicePDF } from './invoice';
import Loader from './lander/Loader';

function Cart() {
  const { cartItems, removeFromCart, updateCartItem } = useContext(CartContext);
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [province, setProvince] = useState('');
  const [note, setNote] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [txnId, setTxnId] = useState('');
  const [initResponse, setInitResponse] = useState(null);
  const [statusResponse, setStatusResponse] = useState(null);
  const [isChecking, setIsChecking] = useState(false);
  const [isQRCodeShown, setIsQRCodeShown] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const calculateTotals = () => {
    const subtotal = cartItems.reduce((total, item) => {
      const price = item.discountPrice && item.discountPrice < item.price 
        ? item.discountPrice 
        : item.price;
      return total + price * item.quantity;
    }, 0);
    const shipping = 1.5;
    const total = subtotal + shipping;
    return { subtotal, shipping, total };
  };

  const { subtotal, shipping, total } = calculateTotals();

  const handleCheckout = async () => {
    if (!name || !address || !phoneNumber || !province) {
      toast.error('Please fill in your name, address, phone number, and province before proceeding.');
      return;
    }

    setIsLoading(true);

    try {
      await handleInitTransaction(total);
      setIsQRCodeShown(true);
      setIsPopupOpen(true);
    } catch (error) {
      console.error('Error processing order:', error);
      toast.error('Failed to process order. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleInitTransaction = async (total) => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/init-transaction`, { total });
      setInitResponse(response.data);
      setTxnId(response.data.data.txn_id);
      setIsChecking(true);
    } catch (error) {
      console.error("Error initializing transaction:", error);
      toast.error('Failed to initialize payment. Please try again.');
    }
  };

  const handleCheckStatus = async () => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/check-status`, { txnId });
      setStatusResponse(response.data);

      if (response.data.data.txn_status === 'SUCCESS' || response.data.data.txn_status === 'FAILED') {
        setIsChecking(false);
      }

      if (response.data.data.txn_status === 'SUCCESS') {
        const invoiceData = {
          name,
          address,
          phoneNumber,
          province,
          note,
          subtotal,
          shipping,
          total,
          items: cartItems.map(item => ({
            ...item,
            productImage: item.images ? item.images[0] : item.image,
            effectivePrice: item.discountPrice && item.discountPrice < item.price 
              ? item.discountPrice 
              : item.price
          })),
        };

        setIsLoading(true);
        
        try {
          const invoiceResponse = await axios.post(
            `${process.env.REACT_APP_API_BASE_URL}/api/invoice`, 
            invoiceData
          );

          if (invoiceResponse.status === 201) {
            toast.success('Order processed successfully!');

            for (const item of cartItems) {
              await axios.post(
                `${process.env.REACT_APP_PRODUCT_API_BASE_URL}/api/products/purchase/${item._id}`,
                {
                  quantity: item.quantity,
                  size: item.size,
                }
              );
            }

            setIsPopupOpen(false);
            
            Swal.fire({
              title: 'Payment Successful!',
              text: 'Your order will be delivered in 24h. Would you like to download your invoice?',
              icon: 'success',
              showCancelButton: true,
              confirmButtonText: 'Download PDF',
              cancelButtonText: 'Close',
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              buttonsStyling: true
            }).then((result) => {
              if (result.isConfirmed) {
                downloadInvoicePDF(cartItems, name, address, phoneNumber, province, note, subtotal, shipping, total, txnId);
              }
              // window.location.href = process.env.REACT_APP_FRONTEND_BASE_URL;
            });
          }
        } catch (error) {
          console.error('Error processing invoice:', error);
          toast.error('Failed to process order. Please contact support.');
        } finally {
          setIsLoading(false);
        }
      }

      if (response.data.data.txn_status === 'FAILED') {
        toast.error('Error processing order');
      }
    } catch (error) {
      console.error("Error checking transaction status:", error);
      toast.error('Error verifying payment status');
    }
  };

  const displayItemPrice = (item) => {
    if (item.discountPrice && item.discountPrice < item.price) {
      return (
        <p>
          <span style={{ textDecoration: 'line-through', color: '#999', marginRight: '5px' }}>
            ${item.price.toFixed(2)}
          </span>
          <span style={{ color: '#e91e63' }}>
            ${item.discountPrice.toFixed(2)}
          </span>
        </p>
      );
    }
    return <p>Price: ${item.price.toFixed(2)}</p>;
  };

  useEffect(() => {
    let intervalId;
    if (isChecking) {
      intervalId = setInterval(handleCheckStatus, 3000);
    }
    return () => clearInterval(intervalId);
  }, [isChecking, txnId]);

  useEffect(() => {
    if (statusResponse && statusResponse.data.txn_status === 'FAILED') {
      Swal.fire({
        title: 'Payment Failed',
        text: 'Your payment could not be processed. Please try again.',
        icon: 'error',
        confirmButtonText: 'OK',
      });
    }
  }, [statusResponse]);

  return (
    <div className="cart-page">
      {isLoading && (
        <div className="loading-overlay">
          <Loader />
        </div>
      )}
      <h1>Shopping Cart</h1>
      <div className="cart-container">
        <div className="cart-items">
          {cartItems.map((item) => (
            <div key={item._id} className="cart-item">
              <div className="item-image">
                <img src={item.images ? item.images[0] : item.image} alt={item.name} />
              </div>
              <div className="item-details">
                <h3>{item.name}</h3>
                {displayItemPrice(item)}
                <div className="quantity-selection">
                  <label>Quantity:</label>
                  <div className="quantity-control">
                    <button 
                      onClick={() => updateCartItem(item._id, { quantity: item.quantity - 1 })}
                      disabled={item.quantity <= 1 || isLoading}
                    >-</button>
                    <span>{item.quantity}</span>
                    <button 
                      onClick={() => updateCartItem(item._id, { quantity: item.quantity + 1 })}
                      disabled={isLoading}
                    >+</button>
                  </div>
                </div>
                <button 
                  className="remove-item" 
                  onClick={() => removeFromCart(item._id)}
                  disabled={isLoading}
                >
                  Remove
                </button>
              </div>
              <div className="item-total">
                <p>
                  ${(item.discountPrice && item.discountPrice < item.price 
                    ? item.discountPrice * item.quantity 
                    : item.price * item.quantity).toFixed(2)}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="cart-summary">
          <h2>Order Summary</h2>
          <div className="summary-details">
            <p>Subtotal: ${subtotal.toFixed(2)}</p>
            <p>Delivery: ${shipping.toFixed(2)}</p>
            <hr />
            <h3>Total: ${total.toFixed(2)}</h3>
          </div>

          <div className="checkout-form">
            <h3>Shipping Details</h3>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                disabled={isLoading}
              />
            </div>
            <div className="form-group">
              <label htmlFor="province">Province (Required)</label>
              <select
                id="province"
                value={province}
                onChange={(e) => setProvince(e.target.value)}
                required
                disabled={isLoading}
              >
                <option value="">Select Province</option>
                <option value="Banteay Meanchey">Banteay Meanchey</option>
                <option value="Battambang">Battambang</option>
                <option value="Kampong Cham">Kampong Cham</option>
                <option value="Kampong Chhnang">Kampong Chhnang</option>
                <option value="Kampong Speu">Kampong Speu</option>
                <option value="Kampong Thom">Kampong Thom</option>
                <option value="Kampot">Kampot</option>
                <option value="Kandal">Kandal</option>
                <option value="Kep">Kep</option>
                <option value="Koh Kong">Koh Kong</option>
                <option value="Kratie">Kratie</option>
                <option value="Mondulkiri">Mondulkiri</option>
                <option value="Oddar Meanchey">Oddar Meanchey</option>
                <option value="Pailin">Pailin</option>
                <option value="Phnom Penh">Phnom Penh</option>
                <option value="Preah Sihanouk">Preah Sihanouk</option>
                <option value="Preah Vihear">Preah Vihear</option>
                <option value="Prey Veng">Prey Veng</option>
                <option value="Pursat">Pursat</option>
                <option value="Ratanakiri">Ratanakiri</option>
                <option value="Siem Reap">Siem Reap</option>
                <option value="Stung Treng">Stung Treng</option>
                <option value="Svay Rieng">Svay Rieng</option>
                <option value="Takeo">Takeo</option>
                <option value="Tboung Khmum">Tboung Khmum</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                id="address"
                placeholder="Enter your address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
                disabled={isLoading}
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                placeholder="Enter your phone number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
                className="no-zoom"
                disabled={isLoading}
              />
            </div>
            <div className="form-group">
              <label htmlFor="note">Note (Optional)</label>
              <textarea
                id="note"
                placeholder="Add any special instructions or notes here"
                value={note}
                onChange={(e) => setNote(e.target.value)}
                rows="4"
                disabled={isLoading}
              />
            </div>
          </div>

          <div className="form-group">
            <label>KHQR Payment</label>
            <img src={khqrLogo} alt="KHQR Payment QR Code" className="khqr-logo" />
          </div>
          <div className="cart-actions">
            <button
              className="checkout-button"
              onClick={handleCheckout}
              disabled={!name || !address || !phoneNumber || !province || isLoading || isQRCodeShown}
            >
              {isLoading ? (
                <div className="button-loader">
                  <Loader />
                  <span>Processing...</span>
                </div>
              ) : (
                'Checkout'
              )}
            </button>
          </div>
        </div>
      </div>

      <Popup
        open={isPopupOpen}
        onClose={() => {}}
        modal
        closeOnDocumentClick={false}
        closeOnEscape={false}
        contentStyle={{ padding: '20px', borderRadius: '10px' }}
      >
        <div className="popup-content">
          {initResponse && (
            <div className="transaction-details">
              <div className="qr-code-container">
                <img src={qr} alt="KHQR Background" className="khqr-background" />
                <div className="qr-code-overlay">
                  <QRCode value={initResponse.data.qr} size={150} />
                </div>
                <div className="total-overlay">{total.toFixed(2)} USD</div>
              </div>
              <h3>Scan QR Code to Pay</h3>
            </div>
          )}
        </div>
      </Popup>
    </div>
  );
}

export default Cart;
