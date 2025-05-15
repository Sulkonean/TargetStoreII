// import React from "react";
// import CategoryMenu from "./CategoryMenu";
// import { Carousel } from "react-bootstrap"; // Only import Carousel once
// import "./Section.css";



// function Section() {
//   return (
//     <div>
//       <CategoryMenu />
//       <div className="section">
//         <div className="container">
//           <div className="row">
//             <Carousel interval={2000}>
//               <Carousel.Item>
//                 <img
//                   className="d-block w-100"
//                   src="./img/slide.PNG"
//                   alt="First slide"
//                 />
//                 {/* <Carousel.Caption>
//                   <h5>Boxy Fit</h5>
//                   <p>Best quality fabric.</p>
//                 </Carousel.Caption> */}
//               </Carousel.Item>

//               <Carousel.Item>
//                 <img
//                   className="d-block w-100"
//                   src="./img/IMG_4171.JPG"
//                   alt="Second slide"
//                 />
//                 {/* <Carousel.Caption>
//                   <h5>Stussy Gang 🎱🎱</h5>
//                   <p>Stussy basic collection.</p>
//                 </Carousel.Caption> */}
//               </Carousel.Item>

//               <Carousel.Item>
//                 <img
//                   className="d-block w-100"
//                   src="./img/slide2.PNG"
//                   alt="Third slide"
//                 />
//                 {/* <Carousel.Caption>
//                   <h5>Stussy Cap 🧢</h5>
//                   <p>Stylish & trendy.</p>
//                 </Carousel.Caption> */}
//               </Carousel.Item>
//             </Carousel>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Section;




import React from "react";
// import CategoryMenu from "./CategoryMenu";
import { Carousel } from "react-bootstrap"; // Only import Carousel once
import "./Section.css";



function Section() {
  return (
    <div>
      {/* <CategoryMenu /> */}
      <div className="section">
        <div className="container">
          <div className="row">
            <Carousel interval={2000}>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="./img/slide.PNG"
                  alt="First slide"
                />
                {/* <Carousel.Caption>
                  <h5>Boxy Fit</h5>
                  <p>Best quality fabric.</p>
                </Carousel.Caption> */}
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="./img/IMG_4171.JPG"
                  alt="Second slide"
                />
                {/* <Carousel.Caption>
                  <h5>Stussy Gang 🎱🎱</h5>
                  <p>Stussy basic collection.</p>
                </Carousel.Caption> */}
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="./img/slide2.PNG"
                  alt="Third slide"
                />
                {/* <Carousel.Caption>
                  <h5>Stussy Cap 🧢</h5>
                  <p>Stylish & trendy.</p>
                </Carousel.Caption> */}
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section;