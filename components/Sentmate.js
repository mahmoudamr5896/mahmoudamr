import React from 'react'

export default function Sentmate() {
  return (
    <div>
        <div class="container-xxl py-5 px-0 wow fadeInUp" data-wow-delay="0.1s">

            <div class="row g-0">
            <div className="col-md-6" style={{ backgroundImage: 'url("https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")', height: '100vh', backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative' }}>
      <div className="video d-flex align-items-center justify-content-center" style={{ height: '100%' }}>
        <button type="button" className="btn-play d-flex justify-content-center align-items-center" data-bs-toggle="modal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-bs-target="#videoModal" style={{ background: 'rgba(0, 0, 0, 0.5)', border: 'none', borderRadius: '50%', padding: '20px' }}>
          <span className='btn text-white'><i class="fa-solid fa-play"></i></span>
        </button>
      </div>
    </div>
  
                <div class="col-md-6 bg-dark d-flex align-items-center">
                    <div class="p-5 wow fadeInUp" data-wow-delay="0.2s">
                        <h5 class="section-title ff-secondary text-start text-primary fw-normal">Reservation</h5>
                        <h1 class="text-white mb-4">Book A Table Online</h1>
                        <form>
                            <div class="row g-3">
                                <div class="col-md-6">
                                    <div class="form-floating">
                                        <input type="text" class="form-control" id="name" placeholder="Your Name"/>
                                        <label for="name">Your Name</label>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-floating">
                                        <input type="email" class="form-control" id="email" placeholder="Your Email"/>
                                        <label for="email">Your Email</label>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-floating date" id="date3" data-target-input="nearest">
                                        <input type="text" class="form-control datetimepicker-input" id="datetime" placeholder="Date & Time" data-target="#date3" data-toggle="datetimepicker" />
                                        <label for="datetime">Date & Time</label>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-floating">
                                        <select class="form-select" id="select1">
                                          <option value="1">People 1</option>
                                          <option value="2">People 2</option>
                                          <option value="3">People 3</option>
                                        </select>
                                        <label for="select1">No Of People</label>
                                      </div>
                                </div>
                                <div class="col-12">
                                    <div class="form-floating">
                                        <textarea class="form-control" placeholder="Special Request" id="message" style={{height: "100px"}}></textarea>
                                        <label for="message">Special Request</label>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <button class="btn btn-primary w-100 py-3" type="submit">Book Now</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

        <div class="modal fade" id="videoModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content rounded-0">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Youtube Video</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="ratio ratio-16x9">
                        {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/t6Y5_BoWh5M?si=bkq5SSo4U3eP6bBB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
                            <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/t6Y5_BoWh5M?si=bkq5SSo4U3eP6bBB" id="video" allowfullscreen allowscriptaccess="always"
                                allow="autoplay"
                                ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
