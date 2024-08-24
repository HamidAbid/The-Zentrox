import React from 'react'
import Profile1 from '../images/profile1.jpg'
import Profile2 from '../images/profile2.jpg'
import Profile3 from '../images/profile3.jpg'
import Profile4 from '../images/profile4.jpg'
export default function Team() {
  return (
    <div className='container-fluid text-light' id='team'>
      <h1 className='fs-5 opacity-75 text-center fw-light'>TEAM MEMBERS</h1>
      <h2 className='feature-heading text-center'>Our Digital Experts</h2>
      <div className="row mt-5">
        <div className="col-xl-3 text-center">
            <div className='card m-3'>
                <img src={Profile1} alt="" className='img-fluid'/>
                <div className='overlay p-4'>
                <h1 className='h2 px-3'>Richard John</h1><hr />
                <h3 className='fs-4 px-4'>CEO</h3>
                <div className='row  gap-4 justify-content-center px-4'>
                    <div className="col-3 social-logo"><i className="fa-brands fa-facebook-f fa-xl"></i></div>
                    <div className="col-3 social-logo"><i className="fa-brands fa-twitter fa-xl"></i></div>
                    <div className="col-3 social-logo"><i className="fa-brands fa-linkedin-in fa-xl"></i></div>
                </div>
                </div>
            </div>
        </div>
        <div className="col-xl-3 text-center">
            <div className='card m-3'>
                <img src={Profile2} alt="" className='img-fluid'/>
                <div className='overlay p-4'>
                <h1 className='h2 px-3'>Larry Mord</h1><hr />
                <h3 className='fs-4 px-4'>CTO</h3>
                <div className='row  gap-4 justify-content-center px-4'>
                    <div className="col-3 social-logo"><i className="fa-brands fa-facebook-f fa-xl"></i></div>
                    <div className="col-3 social-logo"><i className="fa-brands fa-twitter fa-xl"></i></div>
                    <div className="col-3 social-logo"><i className="fa-brands fa-linkedin-in fa-xl"></i></div>
                </div>
                </div>
            </div>
        </div>
        <div className="col-xl-3 text-center ">
            <div className='card m-3'>
                <img src={Profile3} alt="" className='img-fluid '/>
                <div className='overlay p-4'>
                <h1 className='h2 px-3'>John Milo</h1><hr />
                <h3 className='fs-4 px-4'>Manager</h3>
                <div className='row  gap-4 justify-content-center px-4'>
                    <div className="col-3 social-logo"><i className="fa-brands fa-facebook-f fa-xl"></i></div>
                    <div className="col-3 social-logo"><i className="fa-brands fa-twitter fa-xl"></i></div>
                    <div className="col-3 social-logo"><i className="fa-brands fa-linkedin-in fa-xl"></i></div>
                </div>
                </div>
            </div>
        </div>
        <div className="col-xl-3 text-center ">
            <div className='card m-3'>
                <img src={Profile4} alt="" className='img-fluid'/>
                <div className='overlay p-4'>
                <h1 className='h2 px-3'>Tom Ashik</h1><hr />
                <h3 className='fs-4 px-4'>Developer</h3>
                <div className='row  gap-4 justify-content-center px-4'>
                    <div className="col-2 social-logo"><i className="fa-brands fa-facebook-f fa-xl"></i></div>
                    <div className="col-2 social-logo"><i className="fa-brands fa-twitter fa-xl"></i></div>
                    <div className="col-2 social-logo"><i className="fa-brands fa-linkedin-in fa-xl"></i></div>
                </div>
                </div>
            </div>
        </div>
      </div>
      <div className="row  pt-5 px-2">
        <div className="col-xl-6">
            <h1 className='feature-heading'>Experiance Design & intelligent marketing for growing brands.</h1>
            <div className="btn mt-3"><button className='btn first-btn'>Contact Today</button></div>
            </div>
        
        <div className="col-xl-6">
            <div className="design my-2">
                <span className='fs-3'>Design</span>
                <div className='line'> 
                <div className="design-line"></div>
                </div>
               
            </div>
            <div className="design my-5">
                <span className='fs-3'>Development</span>
                <div className='line'>
                <div className="development-line"></div>
                </div>
               
            </div>
            <div className="design my-5">
                <span className='fs-3'>Marketing</span>
                <div className='line'>
                <div className="marketing-line"></div>
                </div>
                
            </div>
        </div>
      </div>
    </div>
  )
}
