
// // import React, { useContext, useState } from 'react';
// // import { Link } from 'react-router-dom';
// // import { CartContext } from './Cart/CartContext'; // Import CartContext

// // function Header() {
// //   const { cartItems } = useContext(CartContext); // Use CartContext
// //   const [isAuthenticated, setIsAuthenticated] = useState(
// //     !!localStorage.getItem('token') // Check if token exists in local storage
// //   );

// //   // Calculate the total number of items in the cart
// //   const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

// //   const handleSignOut = () => {
// //     localStorage.removeItem('token'); // Remove token from local storage
// //     setIsAuthenticated(false); // Update state
// //   };

// //   return (
// //     <div>
// //       <header>
// //         {/* TOP HEADER */}
// //         <div id="top-header">
// //           <div className="container">
// //             <ul className="header-links pull-left">
// //               <li>
// //                 <a href="#">
// //                   <i className="fa fa-phone" /> +855-10-886-460
// //                 </a>
// //               </li>
// //               <li>
// //                 <a href="#">
// //                   <i className="fa fa-envelope-o" /> hengsokthon00@email.com
// //                 </a>
// //               </li>
// //               <li>
// //                 <a href="#" />
// //               </li>
// //             </ul>
// //             <ul className="header-links pull-right">
// //               {isAuthenticated ? (
// //                 <li>
// //                   {/* <button onClick={handleSignOut} className="signout-btn">
// //                     <i className="fa fa-sign-out" /> Sign Out
// //                   </button> */}
// //                 </li>
// //               ) : (
// //                 <li>
// //                   {/* <Link to="/account">
// //                     <i className="fa fa-user-o" /> Sign In
// //                   </Link> */}
// //                 </li>
// //               )}
// //               <li>
// //                 <a href="https://t.me/Target_clothe" target="_blank" rel="noopener noreferrer">
// //                   <i className="fa fa-user-o" /> Customer Service
// //                 </a>
// //               </li>
// //             </ul>
// //           </div>
// //         </div>
// //         {/* /TOP HEADER */}
// //         {/* MAIN HEADER */}
// //         <div id="header">
// //           <div className="container">
// //             <div className="row">
// //               {/* LOGO */}
// //               <div className="col-md-3">
// //                 <div className="header-logo">
// //                   <a href="#" className="logo" />
// //                 </div>
// //               </div>
// //               {/* /LOGO */}
// //               {/* SEARCH BAR */}
// //               <div className="col-md-6">
// //                 <div className="header-search">
// //                   <form>
// //                     <select className="input-select" />
// //                     <input className="input" placeholder="Search here" />
// //                     <button className="search-btn">Search</button>
// //                   </form>
// //                 </div>
// //               </div>
// //               {/* /SEARCH BAR */}
// //               {/* ACCOUNT */}
// //               <div className="col-md-3 clearfix">
// //                 <div className="header-ctn">
// //                   {/* Cart */}
// //                   <div className="dropdown">
// //                     <Link to="/cart" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="true">
// //                       <span style={{ color: 'white' }}>Cart</span>
// //                       <i style={{ color: 'white' }} className="fa fa-shopping-cart" />
// //                       <div className="qty">{totalItems}</div>
// //                     </Link>
// //                   </div>
// //                   {/* /Cart */}
// //                 </div>
// //               </div>
// //               {/* /ACCOUNT */}
// //             </div>
// //           </div>
// //         </div>
// //         {/* /MAIN HEADER */}
// //       </header>
// //     </div>
// //   );
// // }

// // export default Header;














// import React, { useContext, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { CartContext } from './Cart/CartContext'; // Import CartContext

// function Header() {
//   const { cartItems } = useContext(CartContext); // Use CartContext
//   const [isAuthenticated, setIsAuthenticated] = useState(
//     !!localStorage.getItem('token') // Check if token exists in local storage
//   );

//   // Calculate the total number of items in the cart
//   const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

//   const handleSignOut = () => {
//     localStorage.removeItem('token'); // Remove token from local storage
//     setIsAuthenticated(false); // Update state
//   };

//   return (
//     <div>
//       <header>
//         {/* TOP HEADER */}
//         <div id="top-header">
//           <div className="container">
//             <ul className="header-links pull-left">
//               <li>
//                 <a href="#">
//                   <i className="fa fa-phone" /> +855-10-886-460
//                 </a>
//               </li>
//               <li>
//                 <a href="#">
//                   <i className="fa fa-envelope-o" /> hengsokthon00@email.com
//                 </a>
//               </li>
//               <li>
//                 <a href="#" />
//               </li>
//             </ul>
//             <ul className="header-links pull-right">
//               {isAuthenticated ? (
//                 <li>
//                   {/* <button onClick={handleSignOut} className="signout-btn">
//                     <i className="fa fa-sign-out" /> Sign Out
//                   </button> */}
//                 </li>
//               ) : (
//                 <li>
//                   {/* <Link to="/account">
//                     <i className="fa fa-user-o" /> Sign In
//                   </Link> */}
//                 </li>
//               )}
//               <li>
//                 <a href="https://t.me/Target_clothe" target="_blank" rel="noopener noreferrer">
//                   <i className="fa fa-user-o" /> Customer Service
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>
//         {/* /TOP HEADER */}
//         {/* MAIN HEADER */}
//         <div id="header">
//           <div className="container">
//             <div className="row">
//               {/* LOGO */}
//               <div className="col-md-3">
//                 <div className="header-logo">
//                   <a href="#" className="logo" />
//                 </div>
//               </div>
//               {/* /LOGO */}
//               {/* ACCOUNT */}
//               <div className="col-md-3 clearfix">
//                 <div className="header-ctn">
//                   {/* Cart */}
//                   <div className="dropdown">
//                     <Link to="/cart" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="true">
//                       <span style={{ color: 'white' }}>Cart</span>
//                       <i style={{ color: 'white' }} className="fa fa-shopping-cart" />
//                       <div className="qty">{totalItems}</div>
//                     </Link>
//                   </div>
//                   {/* /Cart */}
//                 </div>
//               </div>
//               {/* /ACCOUNT */}
//             </div>
//           </div>
//         </div>
//         {/* /MAIN HEADER */}
//       </header>
//     </div>
//   );
// }

// export default Header;





// import React, { useContext, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { CartContext } from './Cart/CartContext'; // Import CartContext

// function Header() {
//   const { cartItems } = useContext(CartContext); // Use CartContext
//   const [isAuthenticated, setIsAuthenticated] = useState(
//     !!localStorage.getItem('token') // Check if token exists in local storage
//   );

//   // Calculate total number of items in cart
//   const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

//   const handleSignOut = () => {
//     localStorage.removeItem('token');
//     setIsAuthenticated(false);
//   };

//   return (
//     <div>
//       <header>
//         {/* TOP HEADER */}
//         <div id="top-header">
//           <div className="container">
//             <ul className="header-links pull-left">
//               <li>
//                 <a href="#">
//                   <i className="fa fa-phone" /> +855-10-886-460
//                 </a>
//               </li>
//               <li>
//                 <a href="#">
//                   <i className="fa fa-envelope-o" /> hengsokthon00@email.com
//                 </a>
//               </li>
//             </ul>
//             <ul className="header-links pull-right">
//               {isAuthenticated ? (
//                 <li>
//                   <button onClick={handleSignOut} className="signout-btn" style={{ background: 'none', border: 'none', color: 'white' }}>
//                     <i className="fa fa-sign-out" /> Sign Out
//                   </button>
//                 </li>
//               ) : (
//                 <li>
//                   <Link to="/account">
//                     <i className="fa fa-user-o" /> Sign In
//                   </Link>
//                 </li>
//               )}
//               <li>
//                 <a href="https://t.me/Target_clothe" target="_blank" rel="noopener noreferrer">
//                   <i className="fa fa-user-o" /> Customer Service
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>
//         {/* /TOP HEADER */}

//         {/* MAIN HEADER */}
//         <div id="header">
//           <div className="container">
//             <div className="row">
//               {/* LOGO */}
//               <div className="col-md-3">
//                 <div className="header-logo">
//                   <a href="/" className="logo">
//                     {/* <img src="/logo.png" alt="Logo" style={{ height: '50px' }} /> */}
//                   <img src="/img/logo.png" alt="Logo" style={{ height: '50px' }} />

//                   </a>
//                 </div>
//               </div>
//               {/* /LOGO */}

//               {/* ACCOUNT */}
//               <div className="col-md-3 clearfix">
//                 <div className="header-ctn">
//                   {/* Cart */}
//                   <div className="dropdown">
//                     <Link to="/cart" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="true">
//                       <span style={{ color: 'white' }}>Cart</span>
//                       <i style={{ color: 'white' }} className="fa fa-shopping-cart" />
//                       <div className="qty">{totalItems}</div>
//                     </Link>
//                   </div>
//                   {/* /Cart */}
//                 </div>
//               </div>
//               {/* /ACCOUNT */}
//             </div>
//           </div>
//         </div>
//         {/* /MAIN HEADER */}
//       </header>
//     </div>
//   );
// }

// export default Header;
















// import React, { useContext, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { CartContext } from './Cart/CartContext';
// import './Header.css'; // Import your CSS file for styling

// function Header() {
//   const { cartItems } = useContext(CartContext);
//   const [isAuthenticated, setIsAuthenticated] = useState(
//     !!localStorage.getItem('token')
//   );

//   const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

//   const handleSignOut = () => {
//     localStorage.removeItem('token');
//     setIsAuthenticated(false);
//   };

//   return (
//     <div>
//       <header>
//         {/* TOP HEADER */}
//         {/* <div id="top-header">
//           <div className="container">
//             <ul className="header-links pull-left">
//               <li>
//                 <a href="#"><i className="fa fa-phone" /> +855-10-886-460</a>
//               </li>
//               <li>
//                 <a href="#"><i className="fa fa-envelope-o" /> hengsokthon00@email.com</a>
//               </li>
//             </ul>
//             <ul className="header-links pull-right">
//               {isAuthenticated ? (
//                 <li>
//                   <button onClick={handleSignOut} className="signout-btn" style={{ background: 'none', border: 'none', color: 'white' }}>
//                     <i className="fa fa-sign-out" /> Sign Out
//                   </button>
//                 </li>
//               ) : (
//                 <li>
//                   <Link to="/account"><i className="fa fa-user-o" /> Sign In</Link>
//                 </li>
//               )}
//               <li>
//                 <a href="https://t.me/Target_clothe" target="_blank" rel="noopener noreferrer">
//                   <i className="fa fa-user-o" /> Customer Service
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div> */}
//         {/* /TOP HEADER */}

//         {/* MAIN HEADER */}
//         <div id="header">
//           <div className="container">
//             <div className="row align-items-center justify-content-between">
//               {/* LOGO */}
//               <div className="col-6 col-md-6 d-flex align-items-center">
//                 {/* <div className="header-logo">
//                   <a href="/" className="logo">
//                     <img src="/img/logo.png" alt="Logo" style={{ height: '50px' }} /> 
//                                       <h3 className="title text-center text-md-end text-white">
//                     TARGET STORE
//                   </h3>
//                   </a>
//                 </div> */}
//                 <div className="header-logo d-flex align-items-center">
//                   <a href="/" className="d-flex align-items-center text-decoration-none">
//                     <img
//                       src="/img/logo.png"
//                       alt="Logo"
//                       style={{ height: '50px', marginRight: '10px' }}
//                     />
//                     <h3 className="title text-white m-0">TARGET STORE</h3>
//                   </a>
//                 </div>

//               </div>
//               {/* /LOGO */}

//               {/* CART */}
//               <div className="col-6 col-md-6 d-flex justify-content-end align-items-center">
//                 <div className="header-ctn">
//                   {/* <h3 className="title">TARGET STORE</h3> */}

//                   <div className="dropdown">
//                     <Link to="/cart" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="true">
//                       <span style={{ color: 'white' }}>
//                         Cart <i className="fa fa-shopping-cart" />
//                       </span>
//                       <div className="qty">{totalItems}</div>
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//               {/* /CART */}
//             </div>
//           </div>
//         </div>
//         {/* /MAIN HEADER */}
//       </header>
//     </div>
//   );
// }

// export default Header;


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Import your CSS file for styling

function Header() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem('token')
  );

  const handleSignOut = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
  };

  return (
    <div>
      <header>
        {/* MAIN HEADER */}
        <div id="header">
          <div className="container">
            <div className="row align-items-center justify-content-between">
              {/* LOGO + TEXT */}
              <div className="col-6 col-md-6 d-flex align-items-center">
                <div className="header-logo d-flex align-items-center">
                  <a href="/" className="d-flex align-items-center text-decoration-none">
                    <img
                      src="/img/logo.png"
                      alt="Logo"
                      style={{ height: '50px', marginRight: '10px' }}
                    />
                    <h3 className="title text-white m-0">TARGET STORE</h3>
                  </a>
                </div>
              </div>

              {/* EMPTY RIGHT SIDE OR AUTH LINKS */}
              <div className="col-6 col-md-6 d-flex justify-content-end align-items-center">
                <ul className="header-links d-flex list-unstyled m-0">
                  {/* {isAuthenticated ? (
                    <li>
                      <button
                        onClick={handleSignOut}
                        className="signout-btn text-white"
                        style={{ background: 'none', border: 'none' }}
                      >
                        <i className="fa fa-sign-out" /> Sign Out
                      </button>
                    </li>
                  ) : (
                    <li>
                      <Link to="/account" className="text-white">
                        <i className="fa fa-user-o" /> Sign In
                      </Link>
                    </li>
                  )} */}
                  <li style={{ marginLeft: '90px' }}>
                    <a
                      href="https://t.me/Target_clothe"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white"
                    >
                      <i className="fa fa-user-o" /> Customer Service
                    </a>
                  </li>

                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* /MAIN HEADER */}
      </header>
    </div>
  );
}

export default Header;
