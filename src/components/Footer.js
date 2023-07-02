import React from 'react'
import { Outlet, Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className='mt-5'>
      <footer className="py-5 container">
    <div className="row">
      <div className="col-2">
        <h5>Section</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-muted">Home</Link></li>
          <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-muted">Features</Link></li>
          <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-muted">Pricing</Link></li>
          <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-muted">FAQs</Link></li>
          <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-muted">About</Link></li>
        </ul>
      </div>

      <div className="col-2">
        <h5>Section</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-muted">Home</Link></li>
          <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-muted">Features</Link></li>
          <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-muted">Pricing</Link></li>
          <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-muted">FAQs</Link></li>
          <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-muted">About</Link></li>
        </ul>
      </div>

      <div className="col-2">
        <h5>Section</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-muted">Home</Link></li>
          <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-muted">Features</Link></li>
          <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-muted">Pricing</Link></li>
          <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-muted">FAQs</Link></li>
          <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-muted">About</Link></li>
        </ul>
      </div>

      <div className="col-4 offset-1">
        <form>
          <h5>Subscribe to our newsletter</h5>
          <p>Monthly digest of whats new and exciting from us.</p>
          <div className="d-flex w-100 gap-2">
            <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
            <input id="newsletter1" type="text" className="form-control" placeholder="Email address"/>
            <button className="btn btn-primary" type="button">Subscribe</button>
          </div>
        </form>

      <div className="d-flex justify-content-end py-4 ">
      <ul className="list-unstyled d-flex">
        <li className="ms-3"><Link className="link-dark" to="/"><i class="fa-brands fa-twitter fa-2xl"></i></Link></li>
        <li className="ms-3"><Link className="link-dark" to="/"><i class="fa-brands fa-instagram fa-2xl"></i></Link></li>
        <li className="ms-3"><Link className="link-dark" to="/"><i class="fa-brands fa-linkedin fa-2xl"></i></Link></li>
      </ul>
      </div>
      </div>
    </div>

    <div className="d-flex justify-content-between py-4 my-4 border-top">
      <p>© 2023 Fast'N'Food, Inc. All rights reserved.</p>
      
    </div>
  </footer>
    </div>
  )
}

export default Footer
