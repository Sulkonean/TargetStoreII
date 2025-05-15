// import React, { useContext, useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';
// import Popup from 'reactjs-popup';
// import 'reactjs-popup/dist/index.css';
// import '../Style/style.css';
// import Section from '../Section';
// import Newletter from '../Newletter';
// import { CartContext } from '../Cart/CartContext';
// import QuickView from '../QuickViwe/QuickViewModal'; // Adjust path as needed

// function SweatShorts() {
//   const { addToCart } = useContext(CartContext);
//   const [products, setProducts] = useState([]);
//   const [selectedSizes, setSelectedSizes] = useState({});
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [quickViewProductId, setQuickViewProductId] = useState(null);

//   // Fetch products from the API
//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await axios.get(`${process.env.REACT_APP_PRODUCT_API_BASE_URL}/api/products/OUTFITS`);
//         const productsWithSizes = response.data.map((product) => ({
//           ...product,
//           size: product.size ? product.size.split(', ') : [],
//         }));
//         setProducts(productsWithSizes);
//         setLoading(false);
//       } catch (err) {
//         setError('Failed to fetch products. Please try again later.');
//         setLoading(false);
//         console.error('Error fetching products:', err);
//       }
//     };

//     fetchProducts();
//   }, []);

//   // Handle size selection for a product
//   const handleSizeSelect = (productId, size) => {
//     setSelectedSizes((prevSelectedSizes) => ({
//       ...prevSelectedSizes,
//       [productId]: size,
//     }));
//   };

//   // Handle adding a product to the cart
//   const handleAddToCart = (product, selectedSize) => {
//     if (!selectedSize) {
//       alert('Please select a size before adding to cart.');
//       return;
//     }
//     addToCart(product, selectedSize, 1);
//   };

//   // Handle image click to open modal
//   const handleImageClick = (image) => {
//     setSelectedImage(image);
//   };

//   // Close the image modal
//   const closeImageModal = () => {
//     setSelectedImage(null);
//   };

//   // Handle Quick View
//   const handleQuickView = (productId) => {
//     setQuickViewProductId(productId);
//   };

//   // Close Quick View
//   const closeQuickView = () => {
//     setQuickViewProductId(null);
//   };
  
//   // Display loading state
//   if (loading) {
//     return (
//       <div className="section">
//         <Section />
//         <div className="container">
//           <div className="row">
//             <div className="col-md-12 d-flex justify-content-center align-items-center">
//               <div className="spinner-border" role="status">
//                 <span className="visually-hidden">Loading...</span>
//               </div>
//             </div>
//           </div>
//         </div>
//         <Newletter />
//       </div>
//     );
//   }

//   // Display error state
//   if (error) {
//     return (
//       <div className="section">
//         <Section />
//         <div className="container">
//           <div className="row">
//             <div className="col-md-12">
//               <div className="error-message">
//                 <p>{error}</p>
//               </div>
//             </div>
//           </div>
//         </div>
//         <Newletter />
//       </div>
//     );
//   }

//   return (
//     <div className="section">
//       <Section />
//       <div className="container">
//         <div className="row">
//           <div className="col-md-12">
//             <div className="row product-grid">
//               {products.map((product) => {
//                 const selectedSize = selectedSizes[product._id] || (product.size[0] || '');
//                 return (
//                   <div key={product._id} className="col-lg-3 col-md-4 col-sm-6 col-6">
//                     <div className="product">
//                       {/* Carousel for product images */}
//                       <div
//                         id={`carousel-${product._id}`}
//                         className="carousel slide"
//                         data-bs-ride="carousel"
//                       >
//                         <div className="carousel-inner">
//                           {product.images &&
//                             product.images.map(
//                               (image, index) =>
//                                 image && (
//                                   <div
//                                     key={index}
//                                     className={`carousel-item ${index === 0 ? 'active' : ''}`}
//                                   >
//                                     <img
//                                       src={image}
//                                       alt={`${product.name} - Image ${index + 1}`}
//                                       className="d-block w-100 product-image"
//                                       // style={{ height: '200px', objectFit: 'cover', cursor: 'pointer' }}
//                                       onClick={() => handleImageClick()} // Pass the specific image
//                                     />
//                                   </div>
//                                 )
//                             )}
//                         </div>
//                         {product.images.filter((url) => url.trim() !== '').length > 1 && (
//                           <>
//                             <button
//                               className="carousel-control-prev"
//                               type="button"
//                               data-bs-target={`#carousel-${product._id}`}
//                               data-bs-slide="prev"
//                             >
//                               <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//                               <span className="visually-hidden">Previous</span>
//                             </button>
//                             <button
//                               className="carousel-control-next"
//                               type="button"
//                               data-bs-target={`#carousel-${product._id}`}
//                               data-bs-slide="next"
//                             >
//                               <span className="carousel-control-next-icon" aria-hidden="true"></span>
//                               <span className="visually-hidden">Next</span>
//                             </button>
//                           </>
//                         )}
//                       </div>

//                       {/* Quick View Button */}
//                       <div
//                         className="quick-view"
//                         onClick={() => handleQuickView(product._id)}
//                         style={{ cursor: 'pointer' }}
//                       >
//                         <i className="fa fa-eye"></i>
//                         <span className="tooltipp">Quick View</span>
//                       </div>

//                       {/* Out of Stock Label */}
//                       {product.stock === 0 && (
//                         <span className="out-of-stock">Out of Stock</span>
//                       )}

//                       <div className="product-body">
//                         <p className="product-category">{product.category || 'Uncategorized'}</p>
//                         <h3 className="product-name">
//                           <h to={`/product/${product._id}`}>{product.name}</h>
//                         </h3>
//                         <h4 className="product-price">${product.price.toFixed(2)}</h4>

//                         {/* Size Selection */}
//                         <div className="product-sizes">
//                           <p>Sizes:</p>
//                           <div className="size-buttons">
//                             {product.size.map((size) => (
//                               <button
//                                 key={size}
//                                 onClick={() => handleSizeSelect(product._id, size)}
//                                 className={`size-button ${
//                                   selectedSize === size ? 'selected' : ''
//                                 }`}
//                               >
//                                 {size}
//                               </button>
//                             ))}
//                           </div>
//                         </div>
//                       </div>

//                       {/* Add to Cart Button */}
//                       <div className="add-to-cart">
//                         <button
//                           className={`add-to-cart-btn ${
//                             product.stock === 0 ? 'disabled' : ''
//                           }`}
//                           onClick={() => handleAddToCart(product, selectedSize)}
//                           disabled={product.stock === 0}
//                         >
//                           <i className="fa fa-shopping-cart" />
//                           {product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Quick View Popup */}
//       <Popup
//         open={!!quickViewProductId}
//         closeOnDocumentClick
//         onClose={closeQuickView}
//         position="center center"
//         modal
//         contentStyle={{
//           width: '800px',
//           padding: '20px',
//           borderRadius: '5px',
//           background: '#fff',
//           maxHeight: '80vh',
//           overflowY: 'auto',
//         }}
//       >
//         {quickViewProductId && (
//           <QuickView productId={quickViewProductId} onClose={closeQuickView} />
//         )}
//       </Popup>

//       {/* Image Modal */}
//       {selectedImage && (
//         <div className="image-modal" onClick={closeImageModal}>
//           <div className="modal-content">
//             <img src={selectedImage} alt="Selected" />
//           </div>
//         </div>
//       )}

//       <Newletter />
//     </div>
//   );
// }

// export default SweatShorts;



import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import '../Style/style.css';
import Section from '../Section';
import Newletter from '../Newletter';
import { CartContext } from '../Cart/CartContext';
import QuickView from '../QuickViwe/QuickViewModal';

function SweatShorts() {
  const { addToCart } = useContext(CartContext);
  const [products, setProducts] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [quickViewProductId, setQuickViewProductId] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_PRODUCT_API_BASE_URL}/api/products/OUTFITS`);
        const productsWithSizes = response.data.map((product) => ({
          ...product,
          size: product.size ? product.size.split(', ') : [],
        }));
        setProducts(productsWithSizes);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch products. Please try again later.');
        setLoading(false);
        console.error('Error fetching products:', err);
      }
    };

    fetchProducts();
  }, []);

  const handleSizeSelect = (productId, size) => {
    setSelectedSizes((prevSelectedSizes) => ({
      ...prevSelectedSizes,
      [productId]: size,
    }));
  };

  const handleAddToCart = (product, selectedSize) => {
    if (!selectedSize) {
      alert('Please select a size before adding to cart.');
      return;
    }
    addToCart(product, selectedSize, 1);
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  const handleQuickView = (productId) => {
    setQuickViewProductId(productId);
  };

  const closeQuickView = () => {
    setQuickViewProductId(null);
  };

  // Function to calculate and display price with discount
  const displayPrice = (product) => {
    if (product.discountPrice && product.discountPrice < product.price) {
      return (
        <h4 className="product-price">
          <span style={{ textDecoration: 'line-through', marginRight: '5px', color: '#999' }}>
            ${product.price.toFixed(2)}
          </span>
          <span style={{ color: '#e91e63' }}>
            ${product.discountPrice.toFixed(2)}
          </span>
        </h4>
      );
    }
    return <h4 className="product-price">${product.price.toFixed(2)}</h4>;
  };

  if (loading) {
    return (
      <div className="section">
        <Section />
        <div className="container">
          <div className="row">
            <div className="col-md-12 d-flex justify-content-center align-items-center">
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          </div>
        </div>
        <Newletter />
      </div>
    );
  }

  if (error) {
    return (
      <div className="section">
        <Section />
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="error-message">
                <p>{error}</p>
              </div>
            </div>
          </div>
        </div>
        <Newletter />
      </div>
    );
  }

  return (
    <div className="section">
      <Section />
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="row product-grid">
              {products.map((product) => {
                const selectedSize = selectedSizes[product._id] || (product.size[0] || '');
                return (
                  <div key={product._id} className="col-lg-3 col-md-4 col-sm-6 col-6">
                    <div className="product">
                      <div
                        id={`carousel-${product._id}`}
                        className="carousel slide"
                        data-bs-ride="carousel"
                      >
                        <div className="carousel-inner">
                          {product.images &&
                            product.images.map(
                              (image, index) =>
                                image && (
                                  <div
                                    key={index}
                                    className={`carousel-item ${index === 0 ? 'active' : ''}`}
                                  >
                                    <img
                                      src={image}
                                      alt={`${product.name} - Image ${index + 1}`}
                                      className="d-block w-100 product-image"
                                      onClick={() => handleImageClick()} // Fixed to pass specific image
                                    />
                                  </div>
                                )
                            )}
                        </div>
                        {product.images.filter((url) => url.trim() !== '').length > 1 && (
                          <>
                            <button
                              className="carousel-control-prev"
                              type="button"
                              data-bs-target={`#carousel-${product._id}`}
                              data-bs-slide="prev"
                            >
                              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                              <span className="visually-hidden">Previous</span>
                            </button>
                            <button
                              className="carousel-control-next"
                              type="button"
                              data-bs-target={`#carousel-${product._id}`}
                              data-bs-slide="next"
                            >
                              <span className="carousel-control-next-icon" aria-hidden="true"></span>
                              <span className="visually-hidden">Next</span>
                            </button>
                          </>
                        )}
                      </div>

                      <div
                        className="quick-view"
                        onClick={() => handleQuickView(product._id)}
                        style={{ cursor: 'pointer' }}
                      >
                        <i className="fa fa-eye"></i>
                        <span className="tooltipp">Quick View</span>
                      </div>

                      {product.stock === 0 && (
                        <span className="out-of-stock">Out of Stock</span>
                      )}

                      <div className="product-body">
                        <p className="product-category">{product.category || 'Uncategorized'}</p>
                        <h3 className="product-name">
                          <h to={`/product/${product._id}`}>{product.name}</h>
                        </h3>
                        {displayPrice(product)} {/* Added discount price display */}

                        <div className="product-sizes">
                          <p>Sizes:</p>
                          <div className="size-buttons">
                            {product.size.map((size) => (
                              <button
                                key={size}
                                onClick={() => handleSizeSelect(product._id, size)}
                                className={`size-button ${
                                  selectedSize === size ? 'selected' : ''
                                }`}
                              >
                                {size}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="add-to-cart">
                        <button
                          className={`add-to-cart-btn ${
                            product.stock === 0 ? 'disabled' : ''
                          }`}
                          onClick={() => handleAddToCart(product, selectedSize)}
                          disabled={product.stock === 0}
                        >
                          <i className="fa fa-shopping-cart" />
                          {product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <Popup
        open={!!quickViewProductId}
        closeOnDocumentClick
        onClose={closeQuickView}
        position="center center"
        modal
        contentStyle={{
          width: '800px',
          padding: '20px',
          borderRadius: '5px',
          background: '#fff',
          maxHeight: '80vh',
          overflowY: 'auto',
        }}
      >
        {quickViewProductId && (
          <QuickView productId={quickViewProductId} onClose={closeQuickView} />
        )}
      </Popup>

      {selectedImage && (
        <div className="image-modal" onClick={closeImageModal}>
          <div className="modal-content">
            <img src={selectedImage} alt="Selected" />
          </div>
        </div>
      )}

      <Newletter />
    </div>
  );
}

export default SweatShorts;