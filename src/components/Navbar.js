import React from 'react'
import Logo from '../images/logo.png'

export default function Navbar({ active, value, setActivePage }) {

 
  return (
    <nav className="navbar  navbar-expand-lg  bg fixed-top  ">
      <div className="container-fluid  justify-content-between  ">

        <div className='brand col'>
          <img src={Logo} className='navbar-brand img-fluid px-4' />
        </div>

        <button className="navbar-toggler col-2 p-0 m-0 " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="offcanvas offcanvas-end bg-black  " tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
          <div className="offcanvas-header ">

            <button type="button" className="btn-close bg-info text-light " data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body fs-6  col  ">
            <ul className="navbar-nav flex-grow-1  justify-content-around">
              <li className="nav-item">
                <button className={`nav-link fw-bold ${value == 'Home' ? active : 'text-light'} `} onClick={() => setActivePage('Home')}> Home</button>
              </li>
              <li className="nav-item  ">
                <button  className={`nav-link fw-bold  ${value == 'About' ? active : 'text-light'} `} onClick={() => setActivePage('About')}> About</button>
              </li>
              <li className="nav-item">
                <button className={`nav-link fw-bold  ${value == 'Portfolio' ? active : 'text-light'} `} onClick={() => setActivePage('Portfolio')}> Portfolio</button>
              </li>

              <li className="nav-item">
                <button className={`nav-link fw-bold ${value == 'Contact' ? active : 'text-light'} `} onClick={() => setActivePage('Contact')}>Contact</button>
              </li>

            </ul>

          </div>
        </div>
        <div className='col number text-white-50 text-center px-3'>Call Us: <span className='text-light opacity-100 fw-bold '>+9200000000</span></div>
      </div>
    </nav>
  )
}
