import React from 'react'
import About1 from '../images/about1.jpg'
import About2 from '../images/about2.jpg'
export default function Discover() {
    return (
        <div className='container-fluid text-light' id='discover'>
            <div className="row justify-content-center">
                <div className="col-xl-6 py-5 px-3">
                   
                        <div className='row'>
                            <div className="col-sm-9">
                            <h3 className='fs-6 fw-light opacity-75'>DISCOVER OUR COMPANY</h3>
                            <h1 className='feature-heading fw-bold'>Bringing New IT Business Solutions</h1>
                       </div>
                        </div>
                 
                    <div className='row pt-4'>
                    <div className='ticks col-2 m-2'><i className="fa-solid fa-check fa-2xl"></i></div>
                        <div className='col-sm-10'>
                            <h1 className='fs-4 '>Engaging Group Discussion</h1>
                            <p className='  fs-6 opacity-75'>Lorem ipsum, Lorem ipsum dolor sit amet.dolor sit Lorem ipsum dolor sit. libero soluta possimus sequi illum tenetur.</p>
                        </div>
                    </div>
                    <div className='row  pt-4'>
                    <div className='ticks col-sm-2 m-2'><i className="fa-solid fa-check fa-2xl"></i></div>
                        <div className='col-sm-10'>
                            <h1 className='fs-4 '>Engaging Group Discussion</h1>
                            <p className='  fs-6 opacity-75'>Lorem ipsum, Lorem ipsum dolor sit amet.dolor sit Lorem ipsum dolor sit. libero soluta possimus sequi illum tenetur.</p>
                        </div>
                    </div>
                    <hr />
                    <p className='pt-4 opacity-75'> We help our clients succeed by creating  brand idetities, digital experiances, and print materials. </p>
                        <p>Alonso D.William <span className='p-color fw-bold'> -Head of Idea</span></p>
                   
                </div>
                <div className="col-xl-6 px-5">
                        <div className='d-flex gap-3 justify-content-center text-center'>
                        <div className=" img-1"><img className='img-fluid' src={About1} /></div>
                        <div className=" img-2 "><img className='img-fluid' src={About2} /></div>
                        </div>

                </div>
            </div>

        </div>
    )
}
