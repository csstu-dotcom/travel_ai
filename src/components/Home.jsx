import React from 'react'
import banner from '../assets/Traveller_1.png'
import service_img_1 from '../assets/s1.png'
import service_img_2 from '../assets/s2.png'
import service_img_3 from '../assets/sw.png';
import destination_img_1 from '../assets/d1.png'
import destination_img_2 from '../assets/d2.png'
import destination_img_3 from '../assets/d3.png';
export default function Home() {
  return (
    <div>
            <section className="banner">
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <h4>Best Destination around the world</h4>
                    <h1>Travel the Amazing Places and live a new and full life</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
                    <div className="btn-group">
                        <a href="/create-trip" className="btn btn-primary">Get Started</a>
                       
                    </div>
                </div>
                <div className="col-md-6 text-center">
                    <img src={banner}  alt="banner" className="img-fluid" />
                </div>
            </div>
        </div>
    </section>
    <section className="services">
        <div className="container">
            <h4>Our Services</h4>
            <h1>What We Offer</h1>
            <div className="row">
                <div className="col-md-4">
                    <div className="service-box">
                        <div className="box-img">
                        <img src={service_img_1} alt="service" className="img-fluid" />
                    </div>
                        <h5>Travel Arrangements</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="service-box">
                        <div className="box-img">
                        <img src={service_img_2} alt="service" className="img-fluid" />
                        </div>
                        <h5>Best Price Guarantee</h5>
                   
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="service-box">
                        <div className="box-img">
                            <img src={service_img_3} alt="service" className="img-fluid" />
                        </div>
                        <h5>24/7 Customer Support</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="destination">
        <div className="container">
            <h4>Popular Destinations</h4>
            <h1>Explore the Amazing Places</h1>
            <div className="row">
                <div className="col-md-4">
                    <div className="destination-box">
                        <img src={destination_img_1} alt="destination" className="img-fluid" />
                        <h5>Paris</h5>
                        <p>France</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="destination-box ">
                        <img src={destination_img_2} alt="destination" className="img-fluid" />
                        <h5>London</h5>
                        <p>United Kingdom</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="destination-box ">
                        <img src={destination_img_3} alt="destination" className="img-fluid" />
                        <h5>New York</h5>
                        <p>United States</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}
