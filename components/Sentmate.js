import React from 'react'
import { useState } from 'react';
export default function Sentmate() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        datetime: '',
        people: '1', // Default value
        specialRequest: ''
      });
    
      const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const bookNow = async (event) => {
        event.preventDefault();
        try {
          const response = await fetch('http://localhost:2000/Bookstable', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
          });
          if (response.ok) {
            // Booking successful, handle accordingly
            console.log('Booking successful');
          } else {
            // Handle errors
            console.error('Booking failed');
          }
        } catch (error) {
          console.error('Error:', error);
        }
      };
  return (
    <div>
        <div class="container py-5 px-0 wow fadeInUp" data-wow-delay="0.1s">

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
                        <form onSubmit={bookNow}>
      <div className="row g-3">
        <div className="col-md-6">
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleInputChange}
            />
            <label htmlFor="name">Your Name</label>
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-floating">
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleInputChange}
            />
            <label htmlFor="email">Your Email</label>
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-floating date" id="date3" data-target-input="nearest">
            <input
              type="date"
              className="form-control datetimepicker-input"
              id="datetime"
              name="datetime"
              placeholder="Date & Time"
              data-target="#date3"
              data-toggle="datetimepicker"
              value={formData.datetime}
              onChange={handleInputChange}
            />
            <label htmlFor="datetime">Date & Time</label>
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-floating">
            <select
              className="form-select"
              id="select1"
              name="people"
              value={formData.people}
              onChange={handleInputChange}
            >
              <option value="1">People 1</option>
              <option value="2">People 2</option>
              <option value="3">People 3</option>
            </select>
            <label htmlFor="select1">No Of People</label>
          </div>
        </div>
        <div className="col-12">
          <div className="form-floating">
            <textarea
              className="form-control"
              id="message"
              name="specialRequest"
              placeholder="Special Request"
              style={{ height: "100px" }}
              value={formData.specialRequest}
              onChange={handleInputChange}
            ></textarea>
            <label htmlFor="message">Special Request</label>
          </div>
        </div>
        <div className="col-12">
          <button className="btn btn-primary w-100 py-3" type="submit">
            Book Now
          </button>
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
