import React from 'react'

export default function AboutMain() {
  return (
    <div className='container-fluid  text-light ' id='about-main'>
          <h3 className='fs-6 fw-light p-2 px-4'>Responsive & functional IT design</h3>
      <div className="d-flex flex row justify-content-between p-3">
      
        <div className="col-lg-9 heading">About Company</div>
        <div className="col-lg-3 fs-5 text-center mt-4">
            <span className='border p-2 '>
                <span>Home |</span>
            <span className='fw-bold'> About</span></span>
            </div>
      </div>
    </div>
  )
}
