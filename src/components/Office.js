import React from 'react'
import OfficeImg from '../images/office.jpg'
import Certificate1 from '../images/certificate1.jpg'
import Certificate2 from '../images/certificate2.jpg'
export default function Office() {
    return (
        <div className='container-fluid text-light' id='office'>
            <div className="row justify-content-center gap-3">
                <div className="col-lg-5 p-4 office-img">
                    <img src={OfficeImg} className='img-fluid' />
                    <div className='btn-container '> <button className=" text-center number sec-btn   "><i className="fa-solid  fa-play  fa-2xl  " ></i></button>
                      <span className='bubble'></span></div>
                </div>
                <div className="col-lg-6 p-3 mt-4">
                    <h1 className='fs-6'>Office Tour</h1>
                    <h1 className='heading'>We create a culture that inspires us</h1>
                    <p className='fs-6 my-5'>Help our clients succeed by creating brand identities, digital experiences, and print materials. We offer a wide range of Courses For all ages & Levels. We offer a wide range of Courses For all ages and Levels.</p>
                    <div className="d-flex flex-wrap gap-3"> 
                    <img src={Certificate1} alt="" />
                        <img src={Certificate2} alt="" /></div>
                </div>
            </div>
        </div>
    )
}
