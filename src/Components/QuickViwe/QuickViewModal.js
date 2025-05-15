// import React, { useState, useEffect, useContext } from 'react';
// import axios from 'axios';
// import './Style.css';
// import { Link } from 'react-router-dom';
// import { CartContext } from '../Cart/CartContext';
// import Swal from 'sweetalert2';

// function QuickView({ productId, onClose }) {
//   const [product, setProduct] = useState(null);
//   const [selectedImage, setSelectedImage] = useState('');
//   const [selectedSize, setSelectedSize] = useState('');
//   const [selectedColor, setSelectedColor] = useState('');
//   const [quantity, setQuantity] = useState(1);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
  
//   const { addToCart } = useContext(CartContext);

//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         const response = await axios.get(`${process.env.REACT_APP_PRODUCT_API_BASE_URL}/api/products/id/${productId}`);
//         setProduct(response.data);
//         setSelectedImage(response.data.images[0]);
//         setLoading(false);
//       } catch (err) {
//         console.error("Error fetching product:", err);
//         setError('Failed to fetch product. Please try again later.');
//         setLoading(false);
//       }
//     };
  
//     fetchProduct();
//   }, [productId]);

//   if (loading) {
//     return (
//       <div className="section">
//         <div className="container">
//           <div className="row">
//             <div className="col-md-12 d-flex justify-content-center align-items-center">
//               <div className="spinner-border" role="status">
//                 <span className="visually-hidden">Loading...</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   if (error) {
//     return <div className="quick-view-error">{error}</div>;
//   }

//   if (!product) {
//     return <div className="quick-view-not-found">Product not found.</div>;
//   }

//   const handleImageSelect = (image) => {
//     setSelectedImage(image);
//   };

//   const handleSizeSelect = (size) => {
//     setSelectedSize(size);
//   };

//   const handleColorSelect = (color) => {
//     setSelectedColor(color);
//   };

//   const formatPrice = (price) => {
//     return new Intl.NumberFormat('en-US', {
//       style: 'currency',
//       currency: 'USD'
//     }).format(price);
//   };

//   const handleQuantityChange = (e) => {
//     const value = parseInt(e.target.value) || 1;
//     setQuantity(Math.max(1, Math.min(value, product.stock || 999)));
//   };

//   const incrementQuantity = () => {
//     setQuantity(prev => Math.min(prev + 1, product.stock || 999));
//   };

//   const decrementQuantity = () => {
//     setQuantity(prev => Math.max(1, prev - 1));
//   };

//   const handleAddToCart = () => {
//     if (!selectedSize) {
//       alert('Please select a size before adding to cart');
//       return;
//     }
    
//     if (product.stock === 0) {
//       alert('This product is currently out of stock');
//       return;
//     }

//     addToCart(product, selectedSize, quantity);
//     setQuantity(1);
//     // onClose(); // Uncomment if you want to close the quick view after adding to cart
//   };

//   const colors = product.colors || ['black', 'red', 'blue'];
//   const isOutOfStock = product.stock === 0;

//   return (
//     <div className="quick-view-page">
//       <button 
//         className="close-btn" 
//         onClick={onClose}
//       >
//         ×
//       </button>
//       <div className="quick-view-content">
//         <div className="product-images">
//         <div className="main-image">
//             <img src={selectedImage} alt={product.name} />
//           </div>
//           <div className="thumbnail-images">
//             {product.images.map((image, index) => (
//               <img
//                 key={index}
//                 src={image}
//                 alt={`Thumbnail ${index + 1}`}
//                 className={selectedImage === image ? 'active' : ''}
//                 onClick={() => handleImageSelect(image)}
//               />
//             ))}
//           </div>
          
//         </div>

//         <div className="product-details">
//           <h1>{product.name}</h1>
          
//           <div className="price-section">
//             <span className="price">{formatPrice(product.price)}</span>
//           </div>
         
//           <p className="description">{product.description}</p>

//           {isOutOfStock && (
//             <div className="out-of-stock-message">
//               <span style={{ color: 'red' }}>Out of Stock</span>
//             </div>
//           )}

//           <div className="size-selection">
//             <span>Size</span>
//             <div className="size-options">
//               {product.size.split(', ').map((size, index) => (
//                 <button
//                   key={index}
//                   className={`size-button ${selectedSize === size ? 'selected' : ''}`}
//                   onClick={() => handleSizeSelect(size)}
//                   disabled={isOutOfStock}
//                 >
//                   {size}
//                 </button>
//               ))}
//             </div>
//           </div>

//           <div className="quantity-selection">
//             <span>Quantity</span>
//             <div className="quantity-controls">
//               <button 
//                 className="quantity-btn decrement"
//                 onClick={decrementQuantity}
//                 disabled={quantity <= 1 || isOutOfStock}
//               >
//                 -
//               </button>
//               <input
//                 type="number"
//                 value={quantity}
//                 onChange={handleQuantityChange}
//                 min="1"
//                 max={product.stock || 999}
//                 className="quantity-input"
//                 disabled={isOutOfStock}
//               />
//               <button 
//                 className="quantity-btn increment"
//                 onClick={incrementQuantity}
//                 disabled={isOutOfStock || (product.stock ? quantity >= product.stock : false)}
//               >
//                 +
//               </button>
//             </div>
//           </div>

//           <div className="product-actions">
//             <button 
//               className={`add-to-bag ${isOutOfStock ? 'disabled' : ''}`}
//               onClick={handleAddToCart}
//               disabled={isOutOfStock}
//             >
//               {isOutOfStock ? 'Out of Stock' : 'Add to Cart'}
//             </button>
//           </div>

//           <div className="view-details">
            
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default QuickView;



import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import './Style.css';
import { Link } from 'react-router-dom';
import { CartContext } from '../Cart/CartContext';
import Swal from 'sweetalert2';

function QuickView({ productId, onClose }) {
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_PRODUCT_API_BASE_URL}/api/products/id/${productId}`);
        setProduct(response.data);
        setSelectedImage(response.data.images[0]);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching product:", err);
        setError('Failed to fetch product. Please try again later.');
        setLoading(false);
      }
    };
  
    fetchProduct();
  }, [productId]);

  if (loading) {
    return (
      <div className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-12 d-flex justify-content-center align-items-center">
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return <div className="quick-view-error">{error}</div>;
  }

  if (!product) {
    return <div className="quick-view-not-found">Product not found.</div>;
  }

  const handleImageSelect = (image) => {
    setSelectedImage(image);
  };

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  const handleColorSelect = (color) => {
    setSelectedColor(color);
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price);
  };

  // New function to display price with discount
  const displayPrice = () => {
    if (product.discountPrice && product.discountPrice < product.price) {
      return (
        <div className="price-section">
          <span className="original-price" style={{ 
            textDecoration: 'line-through', 
            color: '#999',
            marginRight: '10px'
          }}>
            {formatPrice(product.price)}
          </span>
          <span className="discount-price" style={{ 
            color: '#e91e63',
            fontWeight: 'bold'
          }}>
            {formatPrice(product.discountPrice)}
          </span>
          <span className="discount-badge" style={{
            marginLeft: '10px',
            background: '#e91e63',
            color: 'white',
            padding: '2px 8px',
            borderRadius: '3px',
            fontSize: '12px'
          }}>
            Sale
          </span>
        </div>
      );
    }
    return (
      <div className="price-section">
        <span className="price">{formatPrice(product.price)}</span>
      </div>
    );
  };

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value) || 1;
    setQuantity(Math.max(1, Math.min(value, product.stock || 999)));
  };

  const incrementQuantity = () => {
    setQuantity(prev => Math.min(prev + 1, product.stock || 999));
  };

  const decrementQuantity = () => {
    setQuantity(prev => Math.max(1, prev - 1));
  };

  const handleAddToCart = () => {
    if (!selectedSize) {
      Swal.fire({
        icon: 'warning',
        title: 'Size Required',
        text: 'Please select a size before adding to cart',
        confirmButtonColor: '#3085d6'
      });
      return;
    }
    
    if (product.stock === 0) {
      Swal.fire({
        icon: 'error',
        title: 'Out of Stock',
        text: 'This product is currently out of stock',
        confirmButtonColor: '#3085d6'
      });
      return;
    }

    addToCart(product, selectedSize, quantity);
    Swal.fire({
      icon: 'success',
      title: 'Added to Cart',
      text: `${product.name} has been added to your cart!`,
      showConfirmButton: false,
      timer: 1500
    });
    setQuantity(1);
    // onClose(); // Uncomment if you want to close the quick view after adding to cart
  };

  const colors = product.colors || ['black', 'red', 'blue'];
  const isOutOfStock = product.stock === 0;

  return (
    <div className="quick-view-page">
      <button 
        className="close-btn" 
        onClick={onClose}
      >
        ×
      </button>
      <div className="quick-view-content">
        <div className="product-images">
          <div className="main-image">
            <img src={selectedImage} alt={product.name} />
          </div>
          <div className="thumbnail-images">
            {product.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className={selectedImage === image ? 'active' : ''}
                onClick={() => handleImageSelect(image)}
              />
            ))}
          </div>
        </div>

        <div className="product-details">
          <h1>{product.name}</h1>
          
          {displayPrice()} {/* Use the new displayPrice function */}
         
          <p className="description">{product.description}</p>

          {isOutOfStock && (
            <div className="out-of-stock-message">
              <span style={{ color: 'red' }}>Out of Stock</span>
            </div>
          )}

          <div className="size-selection">
            <span>Size</span>
            <div className="size-options">
              {product.size.split(', ').map((size, index) => (
                <button
                  key={index}
                  className={`size-button ${selectedSize === size ? 'selected' : ''}`}
                  onClick={() => handleSizeSelect(size)}
                  disabled={isOutOfStock}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="quantity-selection">
            <span>Quantity</span>
            <div className="quantity-controls">
              <button 
                className="quantity-btn decrement"
                onClick={decrementQuantity}
                disabled={quantity <= 1 || isOutOfStock}
              >
                -
              </button>
              <input
                type="number"
                value={quantity}
                onChange={handleQuantityChange}
                min="1"
                max={product.stock || 999}
                className="quantity-input"
                disabled={isOutOfStock}
              />
              <button 
                className="quantity-btn increment"
                onClick={incrementQuantity}
                disabled={isOutOfStock || (product.stock ? quantity >= product.stock : false)}
              >
                +
              </button>
            </div>
          </div>

          <div className="product-actions">
            <button 
              className={`add-to-bag ${isOutOfStock ? 'disabled' : ''}`}
              onClick={handleAddToCart}
              disabled={isOutOfStock}
            >
              {isOutOfStock ? 'Out of Stock' : 'Add to Cart'}
            </button>
          </div>

          <div className="view-details">
            <Link to={`/product/${product._id}`} onClick={onClose}>
              View Full Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuickView;