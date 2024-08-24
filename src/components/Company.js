import React from 'react'
import Feature1 from '../images/feature1.jpg'
import Feature2 from '../images/feature2.jpg'
import Feature3 from '../images/feature3.jpg'
export default function Company() {
    return (
        <div className='container-fluid  text-center text-light' id='company'>
            <h4 className="fs-6  ">Company Follows</h4>
            <h1 className='feature-heading my-4'>Waretech Work Inside</h1>
            <div className='row '>
                <div className=" col-xl-4 mt-4 p-3  " >
                    <div className='card text-light'>
                        <img src={Feature1} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title text-start">Become our partners?</h5>
                            <p className="card-text text-start">We’re available for 8 hours a day! Contact to require a detailed analysis</p>
                        </div>
                    </div>
                </div>
                <div className=" col-xl-4 mt-4 p-3 " >
                    <div className='card text-light'>
                        <img src={Feature2} className="card-img-top" alt="..." />
                        <div className="card-body ">
                            <h5 className="card-title text-start">Become our partners?</h5>
                            <p className="card-text text-start">We’re available for 8 hours a day! Contact to require a detailed analysis</p>
                        </div>
                    </div>
                </div>
                <div className=" col-xl-4 mt-4 p-3" >
                    <div className='card text-light'>
                        <img src={Feature3} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title text-start">Become our partners?</h5>
                            <p className="card-text text-start">We’re available for 8 hours a day! Contact to require a detailed analysis</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='gap-4 d-flex flex-wrap justify-content-center mt-4'>
                <button className='btn btn-danger p-2 fs-5'>Our Services</button>
                <button className='btn  btn-outline-danger p-2 fs-5'>Get In Touch</button>
            </div>
        </div>
    )
}
