import React from 'react'
// import '@/styles/home.css'
export default function Section_2() {
  return (
     <>
      <div class="container-xxl py-5 ">
            <div class="container">
                <div class="row g-4">
                    <div class="col-lg-3 col-sm-6 wow hover-overlay border " data-wow-delay="0.1s">
                        <div class="service-item rounded pt-3">
                            <div class="p-4 text-center">
                            {/* <i className="fa fa-3x fa-user-tie text-primary mb-4"></i> */}
                            <i class="fa-solid fa-user-tie fa-2xl mb-4" style={{color: "#c04916"}}></i>
                                <h5>Master Chefs</h5>
                                <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-sm-6 wow fadeInUp border " data-wow-delay="0.3s">
                        <div class="service-item rounded pt-3">
                            <div class="p-4 text-center">
                                {/* <i class="fa fa-3x fa-utensils text-primary mb-4"></i> */}
                                <i class="fa-solid fa-utensils fa-2xl mb-4" style={{color: "#f2460d"}}></i>

                                <h5>Quality Food</h5>
                                <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-sm-6 wow fadeInUp border " data-wow-delay="0.5s">
                        <div class="service-item rounded pt-3">
                            <div class="p-4 text-center">
                            <i class="fa-solid fa-cart-plus fa-2xl mb-4" style={{color: "#ed1e07"}}></i>
                                {/* <i class="fa fa-3x fa-cart-plus text-primary mb-4"></i> */}
                                <h5>Online Order</h5>
                                <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-sm-6 wow fadeInUp border " data-wow-delay="0.7s">
                        <div class="service-item rounded pt-3">
                            <div class="p-4 text-center">
                            <i class="fa-solid fa-headset fa-2xl mb-4" style={{color: "#bd1414"}}></i>
                                {/* <i class="fa fa-3x fa-headset text-primary mb-4"></i> */}
                                <h5>24/7 Service</h5>
                                <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>

  )
}
