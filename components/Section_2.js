import React from 'react';
import { Button } from 'react-bootstrap';
export default function HeroSection() {
  return (
    <section className="hero-section-2 d-flex align-items-center" 
    style={{'background-color': '#1c1e21','padding': '100px', 'position': 'relative'}}>
      <div className="container text-center text-white">
        <h1 className="hero-title" style={{  'font-size': '2.5rem', 'font-weight': '700','line-height':' 1.2'}}>
          Hello, I'm <span className="highlight" style={{    'color': '#6a4ef6', 'background': '-webkit-linear-gradient(45deg, #6a4ef6, #00c9ff)', '-webkit-background-clip': 'text','-webkit-text-fill-color': 'transparent'}}>Mahmoud Amr Hassan</span>,
          <br />
        </h1>
        <p className="hero-subtitle mt-3" style={{ 'font-size': '1.2rem',
   ' font-weight': '400',
    'max-width': '600px',
    'margin': '0 auto'}}>
        software engineer graduated from the Information Technology Institute (ITI), certified by Google as a Data Analyst. I'm proficient in JavaScript, ES6, jQuery, React, Python, Django, Flask, SQL, PostgreSQL, MySQL, MongoDB, HTML5, CSS3, Bootstrap, Git, GitHub, Bash scripting, Apache, Odoo, Docker, C, C++, PHP, and WordPress.
        </p>
        <Button variant="primary" className="mt-4 hero-button" style={{ '  background-color': '#00c9ff',
    'border': 'none',
    'padding': '10px 30px',
    'font-size': '1rem',
    'border-radius': '30px',
    'box-shadow': '0px 10px 20px rgba(0, 201, 255, 0.3)'}}>
            <a className='btn' href='./mahmoudamrhassan_resume01.pdf'> 
               Download CV
            </a>
        </Button>
      </div>
      <div className="hero-image-wrapper" 
      style={{ 'position': 'absolute',
    'top': '50%',
    'right':' 10%',
    'transform': 'translateY(-50%)'}}>
        <img src="./img.jpeg" alt="Mahmoud Amr Hassan" style={{
             'width':' 150px',     'height': '150px',
             'border-radius': '50%',
             'border': '5px solid #1c1e21',
            ' box-shadow': '0px 10px 20px rgba(0, 0, 0, 0.3)'
        }}/>
      </div>
    </section>
  );
}


// import React from 'react'
// // import '@/styles/home.css'
// export default function Section_2() {
//   return (
//      <>
//       <div class="container-xxl py-5 ">
//             <div class="container">
//                 <div class="row g-4">
//                     <div class="col-lg-3 col-sm-6 wow hover-overlay border " data-wow-delay="0.1s">
//                         <div class="service-item rounded pt-3">
//                             <div class="p-4 text-center">
//                             {/* <i className="fa fa-3x fa-user-tie text-primary mb-4"></i> */}
//                             <i class="fa-solid fa-user-tie fa-2xl mb-4" style={{color: "#c04916"}}></i>
//                                 <h5>Master Chefs</h5>
//                                 <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
//                             </div>
//                         </div>
//                     </div>
//                     <div class="col-lg-3 col-sm-6 wow fadeInUp border " data-wow-delay="0.3s">
//                         <div class="service-item rounded pt-3">
//                             <div class="p-4 text-center">
//                                 {/* <i class="fa fa-3x fa-utensils text-primary mb-4"></i> */}
//                                 <i class="fa-solid fa-utensils fa-2xl mb-4" style={{color: "#f2460d"}}></i>

//                                 <h5>Quality Food</h5>
//                                 <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
//                             </div>
//                         </div>
//                     </div>
//                     <div class="col-lg-3 col-sm-6 wow fadeInUp border " data-wow-delay="0.5s">
//                         <div class="service-item rounded pt-3">
//                             <div class="p-4 text-center">
//                             <i class="fa-solid fa-cart-plus fa-2xl mb-4" style={{color: "#ed1e07"}}></i>
//                                 {/* <i class="fa fa-3x fa-cart-plus text-primary mb-4"></i> */}
//                                 <h5>Online Order</h5>
//                                 <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
//                             </div>
//                         </div>
//                     </div>
//                     <div class="col-lg-3 col-sm-6 wow fadeInUp border " data-wow-delay="0.7s">
//                         <div class="service-item rounded pt-3">
//                             <div class="p-4 text-center">
//                             <i class="fa-solid fa-headset fa-2xl mb-4" style={{color: "#bd1414"}}></i>
//                                 {/* <i class="fa fa-3x fa-headset text-primary mb-4"></i> */}
//                                 <h5>24/7 Service</h5>
//                                 <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </>

//   )
// }
