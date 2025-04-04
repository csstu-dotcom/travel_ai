import React from 'react'
import nav_logo from '../assets/Travello.png'

export default function Footer() {
  return (
    <div>   <section className="footer">
    <div className="container">
        <div className="row">
            <div className="col-md-3">

                <div className="footer-logo">
                    <img src={nav_logo} alt="logo" className="logo"/>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
            </div>
            <div className="col-md-3">
                <h4>Quick Links</h4>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Destinations</a></li>
                    <li><a href="#">Blog</a></li>
                </ul>
            </div>
            <div className="col-md-3">
                <h4>Contact Us</h4>
                <p>123, Main Road, Your City</p>
                <p>
                    <i className="fas fa-envelope"></i>
                    johndoe@email.com


                </p>
                <p>
                    <i className="fas fa-phone"></i>
                    +123 456 7890
                </p>
            </div>
        </div>
    </div>

</section>
</div>
  )
}
