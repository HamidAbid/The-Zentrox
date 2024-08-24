import React from 'react'
import Logo from '../images/logo.png'
export default function Footer() {
    return (
        <div className='container-fluid text-light ' id='footer'>
            <div className="row justify-content-around border-bottom border-dark">
                <div className="col-lg-2 p-3">
                    <div className='text-center'><img src={Logo} className='img-fluid footer-icon' /></div>
                    <p className='fs-6 opacity-75'>2307 Beverley Rd Brooklyn, New York 11226 United States.</p>
                    <span className='fw-bold fs-6'>Open:</span>
                    <span className='fs-6 opacity-75'>Monday to Saturday From 7h to 18h or talk to an expert 0712-0610-3314 – available 24/7</span>
                </div>
                <div className="col-lg-3 "> 
                <div className="footer-heading"><h1 className=' h5 text-center pb-2'>Quick Links</h1></div>
                <div className="row-flex d-flex gap-5 mt-4">
                    <span className='d-flex flex-column gap-4'>
                        <div className='footer-btn'>Home</div>
                        <div className='footer-btn'>Mission & Values</div>
                        <div className='footer-btn'>Meet Our Team</div>
                        <div className='footer-btn'>Pricing</div>
                    </span>
                    <span className='d-flex flex-column gap-4'>
                        <div className='footer-btn'>Service</div>
                        <div className='footer-btn'>News</div>
                        <div className='footer-btn'>Contact</div>
                        <div className='footer-btn'>FAQ's</div>
                    </span>
                </div>
                </div>
                <div className="col-lg-3  "> 
                <div className="footer-heading  "><h1 className=' h5 pb-2'>Subscribe Now</h1></div>
                <div className="d-flex flex-column gap-3 pt-2">
                    <div>Sign up to receive the latest articles</div>
                    <div> <input type="email" placeholder='Enter E-Mail Address' className='bg-warning bg-opacity-25 w-75 p-3 mt-3' /></div>
                    <div><button className='btn first-btn w-75 p-3 rounded-box fw-bold'>Subscribe Now</button></div>
                </div>
                </div>
                <div className="col-lg-2 pt-3 "> 
                <div className="footer-heading"><h1 className=' h5 text-center pb-2'>Our Services</h1></div>
                <div className="d-flex flex-column gap-3 pt-4 opacity-75">
                  <div>Cyber Security</div>
                  <div>IT Management</div>
                  <div>QA & Testing</div>
                  <div>Infrastructure Plan</div>
                </div>
                </div>
               
            </div>
            <div className='text-center fs-6 pt-3 opacity-75'> Copyright © 2022 Waretech. Designed & Developed by Reacthemes</div>
        </div>
    )
}
