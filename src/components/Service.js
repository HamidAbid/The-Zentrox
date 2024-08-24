import React from 'react'
import Logo1 from '../images/icon1.png'
import Logo2 from '../images/icon2.png'
import Logo3 from '../images/icon3.png'
import Logo4 from '../images/icon4.png'
import Logo5 from '../images/icon5.png'
import Logo6 from '../images/icon6.png'
export default function Service() {
  return (
    <div className='container-fluid  text-light' id='service'>
      <h1 className='text-center fs-5 fw-light opacity-75'>SERVICES</h1>
      <h1 className='feature-heading text-center'>Services We Provide</h1>

      <div className=" row justify-content-evenly  mt-5">
        <div className=" col-lg-4 my-3 ">
            <div className="row gap-1 p-4 m-1 justify-content-evenly borders">
                <div className="col-3  "><img src={Logo1} alt="" /></div>
                <div className="col-6 h5  m-3">Branding Design</div>
           
            <p className=' fs-6 fw-light p-3'>Voice and Data Systems are crucial to the success or failure of most businesses.</p> </div>
        </div>
        <div className=" col-lg-4 my-3">
            <div className="row justify-content-evenly p-4 m-1 borders">
                <div className="col-3  "><img src={Logo2} alt="" /></div>
                <div className="col-6 h5   m-3">Strategy</div>
        
            <p className=' fs-6 fw-light p-3'>Voice and Data Systems are crucial to the success or failure of most businesses.</p>
            </div>
        </div>
        <div className="  col-lg-4 my-3">
            <div className="row justify-content-evenly borders p-4 m-1">
                <div className="col-3  "><img src={Logo3} alt="" /></div>
                <div className="col-6 h5   m-3">Web Development</div>
           
            <p className=' fs-6 fw-light p-3'>Voice and Data Systems are crucial to the success or failure of most businesses.</p>
            </div>
        </div>
        <div className=" col-lg-4 my-3 ">
            <div className="row justify-content-evenly p-4 m-1 borders">
                <div className="col-3   "><img src={Logo4} alt="" /></div>
                <div className="col-6 h5   p-3">Web Design</div>
           
            <p className=' fs-6 fw-light p-3'>Voice and Data Systems are crucial to the success or failure of most businesses.</p> </div>
        </div>
        <div className=" col-lg-4 my-3">
            <div className="row justify-content-evenly p-4 m-1 borders">
                <div className="col-3  "><img src={Logo5} alt="" /></div>
                <div className="col-6 h5 m-3">E-commerce</div>
        
            <p className=' fs-6 fw-light p-3'>Voice and Data Systems are crucial to the success or failure of most businesses.</p>
            </div>
        </div>
        <div className="  col-lg-4 my-3">
            <div className="row justify-content-evenly borders p-4 m-1">
                <div className="col-3 "><img src={Logo6} alt="" /></div>
                <div className="col-6 h5   m-3">Social Media</div>
           
            <p className=' fs-6 fw-light p-3'>Voice and Data Systems are crucial to the success or failure of most businesses.</p>
            </div>
        </div>
      </div>
    </div>
  )
}
