// // // import { Link, useLocation } from "react-router-dom";
// // // import { useState, useEffect } from "react";
// // // import './Style/style.css';

// // // const CategoryMenu = () => {
// // //   const location = useLocation(); // Get current path
// // //   const [activeTab, setActiveTab] = useState(""); // Track active tab

// // //   // Set active tab based on current route
// // //   useEffect(() => {
// // //     setActiveTab(location.pathname);
// // //   }, [location]);

// // //   return (
// // //     <div className="section-title">
// // //       <h3 className="title">TARGET STORE</h3>
// // //       <div className="section-nav">
// // //         <ul className="section-tab-nav tab-nav">
// // //           <li className={activeTab === "/hoodie" ? "active active4" : ""}>
// // //             <Link to="/new-arrivas">NEW ARRIVALS</Link>
// // //           </li>
// // //           <li className={activeTab === "/t-shirt" ? "active active4" : ""}>
// // //             <Link to="/hoodies">HOODIES</Link>
// // //           </li>
// // //           <li className={activeTab === "/stussy-cap" ? "active active4" : ""}>
// // //             <Link to="/tees">TEES</Link>
// // //           </li>
// // //           <li className={activeTab === "/sweat-shorts" ? "active active4" : ""}>
// // //             <Link to="/pants">PANTS</Link>
// // //           </li>
// // //         </ul>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default CategoryMenu;



// // import { Link, useLocation } from "react-router-dom";
// // import { useState, useEffect } from "react";
// // import './Style/style.css';

// // const CategoryMenu = () => {
// //   const location = useLocation(); // Get current path
// //   const [activeTab, setActiveTab] = useState(""); // Track active tab

// //   // Set active tab based on current route
// //   useEffect(() => {
// //     setActiveTab(location.pathname);
// //   }, [location]);

// //   return (
// //     <div className="section-title">
// //       {/* <h3 className="title">TARGET STORE</h3> */}
// //       <div className="section-nav">
// //         <ul className="section-tab-nav tab-nav">
// //           <li className={activeTab === "/hoodie" ? "active active4" : ""}>
// //             <Link to="/shop">SHOP</Link>
// //           </li>
// //           <li className={activeTab === "/t-shirt" ? "active active4" : ""}>
// //             <Link to="/hoodies">HOODIES</Link>
// //           </li>
// //           <li className={activeTab === "/stussy-cap" ? "active active4" : ""}>
// //             <Link to="/tees">TEES</Link>
// //           </li>
// //           <li className={activeTab === "/sweat-shorts" ? "active active4" : ""}>
// //             <Link to="/pants">PANTS</Link>
// //           </li>
// //         </ul>
// //       </div>
// //     </div>
// //   );
// // };

// // export default CategoryMenu;
// import { Link, useLocation } from "react-router-dom";
// import { useState, useEffect, useContext } from "react";
// import { CartContext } from "./Cart/CartContext";
// import './Style/style.css';

// const CategoryMenu = () => {
//   const location = useLocation();
//   const [activeTab, setActiveTab] = useState("");
//   const { cartItems } = useContext(CartContext);

//   const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

//   useEffect(() => {
//     setActiveTab(location.pathname);
//   }, [location]);

//   return (
//     <div className="section-title d-flex justify-content-between align-items-center">
//       {/* Left: Category Menu */}
//       <div className="section-nav">
//         <ul className="section-tab-nav tab-nav d-flex mb-0">
//           <li className={activeTab === "/shop" ? "active active4" : ""}>
//             <Link to="/shop">SHOP</Link>
//           </li>
//           <li className={activeTab === "/hoodies" ? "active active4" : ""}>
//             <Link to="/hoodies">HOODIES</Link>
//           </li>
//           <li className={activeTab === "/tees" ? "active active4" : ""}>
//             <Link to="/tees">TEES</Link>
//           </li>
//           <li className={activeTab === "/pants" ? "active active4" : ""}>
//             <Link to="/pants">PANTS</Link>
//           </li>
//         </ul>
//       </div>

//       {/* Right: Cart Info */}
//       <div className="header-ctn me-3">
//         <Link to="/cart" className="text-black position-relative text-decoration-none">
//           <span>
//             <i className="fa fa-shopping-cart" /> Cart
//           </span>
//           <div className="qty" style={{
//             position: 'absolute',
//             top: '-8px',
//             right: '-12px',
//             backgroundColor: 'red',
//             color: 'Black',
//             borderRadius: '50%',
//             width: '20px',
//             height: '20px',
//             textAlign: 'center',
//             fontSize: '12px',
//             lineHeight: '20px'
//           }}>{totalItems}</div>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default CategoryMenu;


import { Link, useLocation } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { CartContext } from "./Cart/CartContext";

const CategoryMenu = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("");
  const { cartItems } = useContext(CartContext);

  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  useEffect(() => {
    setActiveTab(location.pathname);
  }, [location]);

  return (
    <div
      className="section-title d-flex justify-content-between align-items-center"
      style={{
        marginTop: 0,
        marginBottom: 0,
        paddingTop: 0,
        paddingBottom: 0,
      }}
    >
      {/* Left: Category Menu */}
      <div className="section-nav">
        <ul
          className="section-tab-nav tab-nav d-flex"
          style={{
            marginBottom: 0,
            marginTop: 0,
            paddingTop: 0,
            paddingBottom: 0,
          }}
        >
          <li className={activeTab === "/shop" ? "active active4" : ""}>
            <Link to="/shop">SHOP</Link>
          </li>
          <li className={activeTab === "/hoodies" ? "active active4" : ""}>
            <Link to="/hoodies">HOODIES</Link>
          </li>
          <li className={activeTab === "/tees" ? "active active4" : ""}>
            <Link to="/tees">TEES</Link>
          </li>
          <li className={activeTab === "/pants" ? "active active4" : ""}>
            <Link to="/pants">PANTS</Link>
          </li>
        </ul>
      </div>

      {/* Right: Cart Info */}
      <div
        className="header-ctn"
        style={{
          marginTop: 0,
          marginBottom: 0,
          paddingTop: 0,
          paddingBottom: 0,
          marginRight: '1rem',
        }}
      >
        <Link
          to="/cart"
          className="text-black position-relative text-decoration-none"
          style={{
            display: 'flex',
            alignItems: 'center',
            position: 'relative',
            color: 'black',
          }}
        >
          <span style={{ marginRight: '29px' }}>
            <i className="fa fa-shopping-cart" /> 
          </span>
          <div
            className="qty"
            style={{
              position: 'absolute',
              top: '-6px',
              right: '12px',
              backgroundColor: 'red',
              color: 'black',
              borderRadius: '50%',
              width: '20px',
              height: '20px',
              textAlign: 'center',
              fontSize: '12px',
              lineHeight: '20px',
            }}
          >
            {totalItems}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default CategoryMenu;
