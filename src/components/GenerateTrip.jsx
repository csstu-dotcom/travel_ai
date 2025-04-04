import React, { useState } from 'react';

import { FaMapMarkerAlt, FaBookmark, FaEllipsisV, FaVolumeMute, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { FaInstagram, FaTiktok } from 'react-icons/fa';
import hotel from "../assets/hotel.jpg"




function GenerateTrip() {
  const [currentLocation, setCurrentLocation] = useState(0);
  const restaurants = [
    {
      id: 1,
      name: 'Ahdoos Hotel Restaurant',
      description: 'Famous for its traditional Kashmiri cuisine, serving authentic dishes in a charming, historic ambiance.',
      rating: '4.1',
      image: '/api/placeholder/400/300'
    },
    {
      id: 2,
      name: 'Shamyana Restaurant, Srinagar',
      description: 'Offers a unique dining experience with stunning views of Dal Lake and a diverse menu of local and international cuisine.',
      rating: '4.3',
      image: '/api/placeholder/400/300'
    }
  ];
  const locations = [
    {
      id: 1,
      name: 'Srinagar',
      description: 'Srinagar is famous for its beautiful Dal Lake, vibrant houseboats, and rich Mughal gardens, providing a unique cultural and scenic experience.',
      images: ['/api/placeholder/400/250', '/api/placeholder/400/250', '/api/placeholder/400/250']
    },
    {
      id: 2,
      name: 'Gulmarg',
      description: 'Known as the "Meadow of Flowers," Gulmarg offers breathtaking views, world-class skiing in winter, and beautiful trekking trails in summer.',
      images: ['/api/placeholder/400/250', '/api/placeholder/400/250', '/api/placeholder/400/250']
    }
  ];
  
  const nextLocation = () => {
    setCurrentLocation((prev) => (prev + 1) % locations.length);
  };
  
  const prevLocation = () => {
    setCurrentLocation((prev) => (prev - 1 + locations.length) % locations.length);
  };
  
  const currentLocationData = locations[currentLocation];
  return (
    <div> <div className="container-fluid p-0">
    {/* Top Navigation */}
    <div className="d-flex justify-content-between align-items-center p-2 bg-light">
      <button className="btn btn-light btn-sm">
        <p className="me-2" /> Navigation
      </button>
      <div>
        <p className="btn btn-light btn-sm me-2">
          <p className="me-1"> <p/></p>Share
        </p>
        <button className="btn btn-light btn-sm">
          <FaBookmark className="me-1" /> Save
        </button>
      </div>
    </div>

    <div className="row m-0">
      {/* Left Content Section */}
      <div className="col-md-7 p-0">
        {/* Banner Image */}
        <div className="position-relative">
          <img 
            src={hotel}
            alt="Dal Lake in Kashmir" 
            className="img-fluid w-100"
            style={{ height: '250px', objectFit: 'cover' }}
          />
          <div className="position-absolute top-0 start-0 m-2">
            
          </div>
          
        </div>

      

        {/* Content Section */}
        <div className="p-3">
          <h1 className="mb-4">6 Days in Kashmir</h1>
          
          <h4>6-Day Kashmir Itinerary Overview</h4>
          <p className="text-muted">
            Embark on an unforgettable adventure in the stunning landscapes of Kashmir with this 6-day 
            itinerary. Begin your journey in the picturesque city of Srinagar, where you can explore the famous 
            Dal Lake and enjoy a peaceful stay on a traditional houseboat. Visit enchanting Mughal gardens 
            and absorb the local culture.
          </p>
          
          <p className="text-muted">
            Next, head to Gulmarg, a breathtaking meadow often referred to as the "Meadow of Flowers." Here, 
            indulge in adventure activities like skiing in winter or trekking in summer, and take a ride on the 
            Gulmarg Gondola for stunning panoramic views.
          </p>
        </div>
      </div>

      {/* Right Map Section */}
      <div className="col-md-5 p-0">
        <div className="position-relative">
        {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1702967.2839069574!2d73.94535438454413!3d33.52457818397905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e1092499ffa89d%3A0x6567a6d4697e7f1!2sJammu%20and%20Kashmir!5e0!3m2!1sen!2sin!4v1743722685054!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
          
          {/* Map Controls */}
          <div className="position-absolute top-0 end-0 m-2">
            <div className="d-flex flex-column">
              <button className="btn btn-light btn-sm mb-2">+</button>
              <button className="btn btn-light btn-sm">−</button>
            </div>
          </div>
          
          {/* Map Options */}
          <div className="position-absolute top-0 end-0 mt-5 me-2">
            <div className="d-flex flex-column">
              <button className="btn btn-light btn-sm mb-2">
                <p > Export</p>
              </button>
              <button className="btn btn-light btn-sm mb-2">
                 <p > Route</p>
              </button>
              <button className="btn btn-light btn-sm mb-2">↺</button>
              <p className="btn btn-light btn-sm"></p>
                
              
            </div>
          </div>
          
          {/* Map Attribution */}
          <div className="position-absolute bottom-0 start-0 m-2 bg-light p-1 small">
            © Leaflet | © OpenStreetMap contributors
          </div>
        </div>
      </div>
    </div>

    <div className="container py-4" style={{ maxWidth: '1000px' }}>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="m-0 text-secondary">Recommended Explorations</h2>
        <div>
          <button className="btn btn-success me-2 rounded-pill">
            <FaMapMarkerAlt className="me-2" /> Overview
          </button>
          <button className="btn btn-light rounded-pill">
            <span className="me-2">📅</span> By Days
          </button>
        </div>
      </div>
      
      <div className="card border-0" style={{ backgroundColor: '#e0f7f1', borderRadius: '15px' }}>
        <div className="card-header bg-transparent border-0 d-flex justify-content-between align-items-center py-3">
          <div className="d-flex align-items-center">
            <div className="rounded-circle bg-teal text-white d-flex justify-content-center align-items-center me-3" 
                 style={{ width: '36px', height: '36px', backgroundColor: '#17a2b8' }}>
              <span>{currentLocationData.id}</span>
            </div>
            <h4 className="m-0 text-teal">{currentLocationData.name}</h4>
          </div>
          <div>
            <button className="btn btn-link text-dark me-2">
              <FaBookmark size={18} />
            </button>
            <button className="btn btn-link text-dark">
              <FaEllipsisV size={18} />
            </button>
          </div>
        </div>
        
        <div className="card-body">
          <p className="text-secondary mb-4">
            {currentLocationData.description}
          </p>
          
          <div className="mb-4">
            <button className="btn btn-light rounded-pill">
              <FaVolumeMute className="me-2" /> Guide
            </button>
          </div>
          
          <div className="position-relative mb-4">
            <img 
              src={currentLocationData.images[0]} 
              alt={`${currentLocationData.name} view`} 
              className="img-fluid rounded"
              style={{ width: '100%', maxHeight: '250px', objectFit: 'cover' }}
            />
            <button 
              className="btn btn-teal rounded-circle position-absolute top-50 start-0 translate-middle-y ms-2"
              onClick={prevLocation}
              style={{ backgroundColor: '#20B2AA' }}
            >
              <FaChevronLeft className="text-white" />
            </button>
            <button 
              className="btn btn-teal rounded-circle position-absolute top-50 end-0 translate-middle-y me-2"
              onClick={nextLocation}
              style={{ backgroundColor: '#20B2AA' }}
            >
              <FaChevronRight className="text-white" />
            </button>
          </div>
          
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <button className="btn btn-light rounded-circle me-2">
                <FaInstagram size={18} />
              </button>
              <button className="btn btn-light rounded-circle">
                <FaTiktok size={18} />
              </button>
            </div>
            <div>
              <button className="btn btn-light rounded-pill">
                🌎 Google Maps
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="container py-4" style={{ maxWidth: '1000px' }}>
      <div className="mb-4 mt-5">
        <h2 className="text-secondary">Tasty Picks</h2>
      </div>

      {restaurants.map((restaurant, index) => (
        <div key={restaurant.id} className="mb-4">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <div className="d-flex align-items-start mb-3">
                <div className="me-3">
                  <div className="rounded-circle bg-warning d-flex justify-content-center align-items-center" 
                       style={{ width: '40px', height: '40px' }}>
                    {/* <FaUtensils color="white" /> */}
                  </div>
                </div>
                <div>
                  <h4 className="mb-0">{restaurant.name}</h4>
                </div>
              </div>
              
              <div className="d-flex align-items-center mb-3">
                <div className="me-3">
                  <div className="text-success">
                    {/* <FaEllipsisH /> */}
                  </div>
                </div>
                
                <div>
                  <p className="text-secondary mb-0">
                    {restaurant.description}
                  </p>
                </div>
              </div>
              
              <div className="d-flex align-items-center">
                <button className="btn btn-light rounded-pill me-3">
                  <span className="me-2">🌎</span> Google Maps
                </button>
                <div className="d-flex align-items-center text-warning">
                  {/* <FaStar /> */}
                  <span className="ms-1">{restaurant.rating}</span>
                </div>
              </div>
            </div>
            
            <div className="col-lg-4 mt-3 mt-lg-0">
              <img 
                src={restaurant.image} 
                alt={restaurant.name} 
                className="img-fluid rounded" 
                style={{ width: '100%', height: '200px', objectFit: 'cover' }}
              />
            </div>
          </div>
          
          {index < restaurants.length - 1 && (
            <hr className="my-4" />
          )}
        </div>
      ))}
      
      <div className="text-center mt-4">
        <button className="btn btn-link text-success">
          Show More ▼
        </button>
      </div>
    </div>
  
  </div>
  )
}

export default GenerateTrip