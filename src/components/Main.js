import React from 'react'
import MainImg from '../images/main.webp'
import Imgbar from '../images/imgbar.png'
export default function Main() {
  return (
    <> <div className=' text-light container-fluid ' id='main'>
      <div className='row'>
     <div className='main-banner  text-center order-2 col-xl-6  '>
        <img src={MainImg} className='img-fluid' />
        </div>
        <div className="main-para col-xl-6 mt-5 order-1 text-center">
            <div className='heading  fw-bold'>
           Modern <span> Digital </span>Corporations
        </div>

        <div className='row  gap-5 my-4 ms-2 justify-content-center'>
        <div className="  text-center rounded col-sm-4 "><button className='first-btn btn fw-bold number mt-3 p-2 ' >Discover More</button></div>
        <div className='sec-container col-sm-2 '> <button className=" text-center number sec-btn   "><i className="fa-solid  fa-play  fa-2xl  " ></i></button>
       <span className='bubble'></span></div>
     
        <div className='fs-6 col-sm-4 mt-4 number'>Watch Intro Video</div>
        </div>
        </div>
        </div>
    </div>
    <div className=' img-bar text-center'><img src={Imgbar} className='img-fluid'/></div>
    </>
  )
}
