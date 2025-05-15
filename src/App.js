import React from 'react';
import { CartProvider } from './Components/Cart/CartContext';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Navigation from './Components/Navigation';
import ProductAPI from './Components/ProductAPI'; // Hoodie Page
import TShirt from './Components/Product/T-Shirt'; // T-Shirt Page
import StussyCap from './Components/Product/Stussy-Cap';
import SweatShorts from './Components/Product/Sweat-Shorts';
import Cart from './Components/Cart/Cart';
import Footer from './Components/Footer';
import ViewProduct from './Components/QuickViwe/QuickViewModal';
import CategoryMenu from './Components/CategoryMenu';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';


// import LaunchTimer from './Launch/LaunchTimer';

function App() {
  return (

    
    <Router>
      {/* <LaunchTimer /> */}
        <CartProvider>
        <ToastContainer />
      <div>
        <Header />
        <Navigation />
        <CategoryMenu />
        <Routes>
          
          <Route path="/" element={<ProductAPI />} /> {/* Default route */}
          <Route path="/hoodies" element={<TShirt />} />
          <Route path="/shop" element={<ProductAPI />} />
          <Route path="/tees" element={<StussyCap />} />
          <Route path="/pants" element={<SweatShorts />} />
          <Route path="/cart" element={<Cart />} />

          <Route path="/quick-view/:productId" element={<ViewProduct />} />

          
        </Routes>
        
        
      </div>
      <Footer />
      </CartProvider>
      
    </Router>
  );
}


export default App;









// import React, { useState, useEffect } from 'react';
// import { CartProvider } from './Components/Cart/CartContext';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Header from './Components/Header';
// import Navigation from './Components/Navigation';
// import ProductAPI from './Components/ProductAPI';
// import TShirt from './Components/Product/T-Shirt';
// import StussyCap from './Components/Product/Stussy-Cap';
// import SweatShorts from './Components/Product/Sweat-Shorts';
// import Cart from './Components/Cart/Cart';
// import Footer from './Components/Footer';
// import ViewProduct from './Components/QuickViwe/QuickViewModal';
// import CategoryMenu from './Components/CategoryMenu';
// import LaunchTimer from './Launch/LaunchTimer';

// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// function App() {
//   const [isLaunched, setIsLaunched] = useState(false);
//   const launchDate = new Date('2025-03-24T00:00:00'); // Set your launch date here

//   useEffect(() => {
//     const checkLaunchStatus = () => {
//       const now = new Date();
//       if (now >= launchDate) {
//         setIsLaunched(true);
//       }
//     };

//     checkLaunchStatus();
//     const timer = setInterval(checkLaunchStatus, 1000); // Check every second
//     return () => clearInterval(timer);
//   }, []);

//   // Main App Content Component
//   const MainApp = () => (
//     <Router>
//       <CartProvider>
//         <ToastContainer />
//         <div>
//           <Header />
//           <Navigation />
//           <CategoryMenu />
//           <Routes>
//             <Route path="/" element={<ProductAPI />} />
//             <Route path="/hoodies" element={<TShirt />} />
//             <Route path="/new-arrivas" element={<ProductAPI />} />
//             <Route path="/tees" element={<StussyCap />} />
//             <Route path="/pants" element={<SweatShorts />} />
//             <Route path="/cart" element={<Cart />} />
//             <Route path="/quick-view/:productId" element={<ViewProduct />} />
//           </Routes>
//         </div>
//         <Footer />
//       </CartProvider>
//     </Router>
//   );

//   return (
//     <div className="App">
//       {isLaunched ? <MainApp /> : <LaunchTimer />}
//     </div>
//   );
// }

// export default App;
