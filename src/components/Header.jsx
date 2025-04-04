import React from 'react'
import logo from "../assets/Travello.png"

export default function Header() {
  return (
    <div>
        <section className="header">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/">
                <img src={logo} alt="logo" className="logo"/>
            </a>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav accordion-body">
                    <li className="nav-item">
                        <a className="nav-link" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/create-trip">Create Trip</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/generate-trip">Generate Trip</a>
                    </li>
                    
                </ul>
            </div> 
            </nav>
    </section>
    </div>
  )
}
