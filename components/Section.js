import React from 'react'

export default function Section() {
  return (
    <div className='container position-relative mb-3 '>
    <div id="carouselExampleCaptions" className="carousel slide position-absolute w-100" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
           src="https://images.pexels.com/photos/19247575/pexels-photo-19247575/free-photo-of-cheeseburger-with-red-onion-tomato-and-lettuce.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" className="d-block w-100" alt="Wild Landscape" height={'700px'} />
          <div className="carousel-caption d-none d-md-block">
            {/* <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          */} </div>
        </div>
        <div className="carousel-item">
        <img src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=600" className="d-block w-100" alt="Wild Landscape" height={'700px'} />
          <div className="carousel-caption d-none d-md-block">
            {/* <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
          </div>
        </div>
        <div className="carousel-item">
        <img src="https://images.pexels.com/photos/745471/pexels-photo-745471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="d-block w-100" alt="Wild Landscape" height={'700px'} />
          <div className="carousel-caption d-none d-md-block">
          {/* <h5>Third slide label</h5> */}
            {/* <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
          </div>
        </div>
      </div>
     </div>

    <div className="container-xxl py-5 text-dark hero-header mb-5 position-relative " style={{ top: '30px' }}>
      <div className="container my-5 py-5">
        <div className="row align-items-center g-5">
          <div className="col-lg-6 text-center text-lg-start">
            <h1 className="display-3 text-white animated slideInLeft ">Enjoy Our<br />Delicious Meal</h1>
            <p className="text-white animated slideInLeft mb-4 pb-2">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
            <a href="" className="btn btn-primary py-sm-3 px-sm-5 me-3 animated slideInLeft">Book A Table</a>
          </div>
          <div className="col-lg-6 text-center text-lg-end overflow-hidden">
            <img className="img-fluid" width={'80px'} src="file:///home/mahmoud/Downloads/Restoran%20Free%20Website%20Template%20-%20Free-CSS.com/bootstrap-restaurant-template/img/hero.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
