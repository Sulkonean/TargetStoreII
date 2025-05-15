import React from 'react'

function Footer() {
  return (
    <div>
      <footer id="footer">
        {/* top footer */}
        <div className="section">
          {/* container */}
          <div className="container">
            {/* row */}
            <div className="row">
              <div className="col-md-3 col-xs-6">
                <div className="footer">
                  <h3 className="footer-title">About Us</h3>
                  <p>
                    we offer high quality with lowest price.</p>
                  <ul className="footer-links">
                    <li><a href="#"><i className="fa fa-map-marker" />1019 SenSok PP</a></li>
                    <li><a href="#"><i className="fa fa-phone" />+855-10-886-460</a></li>
                    <li><a href="#"><i className="fa fa-envelope-o" />hengsokthon00@email.com</a></li>
                    <li>
                      <a href="https://t.me/Target_clothe" target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-user-o" /> Customer Service
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3 col-xs-6">
                <div className="footer">
                  <h3 className="footer-title">Target-Store</h3>
                  <ul className="footer-links">
                    <li><a href="#">NEW ARRIVAL</a></li>
                    <li><a href="#">SHOODIES</a></li>
                    <li><a href="#">TEES</a></li>
                    <li><a href="#">PANTS</a></li>

                  </ul>
                </div>
              </div>
              <div className="clearfix visible-xs" />
              <div className="col-md-3 col-xs-6">
                <div className="footer">
                  <h3 className="footer-title">Information</h3>
                  <ul className="footer-links">
                    <li><a href="#" target="_blank">About Us</a></li>
                    <li><a href="#">Contact Us</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="https://heyzine.com/flip-book/3c0f335b30.html#page/1" target="_blank">Orders and Returns</a></li>
                    <li><a href="#">Terms &amp; Conditions</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3 col-xs-6">
                {/* <div className="footer">
              <h3 className="footer-title">Service</h3>
              <ul className="footer-links">
                <li><a href="#">My Account</a></li>
                <li><a href="#">View Cart</a></li>
                <li><a href="#">Wishlist</a></li>
                <li><a href="#">Track My Order</a></li>
                <li><a href="#">Help</a></li>
              </ul>
            </div> */}
                <div className="footer">
                  <h3 className="footer-title">PAYMENT ACCEPT</h3>
                  <ul className="footer-links">
                    {/* <li> <img src="/img/bakong.png" alt="Logo" style={{ height: '40px' }} /></li> */}
                    <li>
                      <img
                        src="/img/bakong2.png"
                        alt="Logo"
                        style={{ height: '40px', width: '40px', borderRadius: '10px' }}
                      />
                    </li>
                    <li>
                      <img
                        src="/img/phillip.png"
                        alt="Logo"
                        style={{ height: '40px', width: '40px', borderRadius: '10px' }}
                      />
                    </li>
                    <li>
                      <img
                        src="/img/khqr.png"
                        alt="Logo"
                        style={{ height: '40px', width: '40px', borderRadius: '10px' }}
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* /row */}
          </div>
          {/* /container */}
        </div>
        {/* /top footer */}
        {/* bottom footer */}
        <div id="bottom-footer" className="section">
          <div className="container">
            {/* row */}
            <div className="row">
              <div className="col-md-12 text-center">

                <span className="copyright">
                  {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                  This WebSite Develop <i className="fa fa-heart-o" aria-hidden="true" /> by <a href="https://www.facebook.com/profile.php?id=100054257799442" target="red">Ear Sokchan</a>&<a href="https://www.facebook.com/profile.php?id=100086514193910" target="red">Sul Karanay</a>
                  {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                </span>
              </div>
            </div>
            {/* /row */}
          </div>
          {/* /container */}
        </div>
        {/* /bottom footer */}
      </footer>
    </div>

  )
}

export default Footer;
