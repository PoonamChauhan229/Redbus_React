import React from 'react'
import './index.css'
import person from'../assets/person.png'
import Redbus_png_logo from'../assets/Redbus_png_logo.png'

export default function Navbar() {
  return (
    <>
      <nav class="navbarnew navbar navbar-expand-lg navbar-dark  " style={{ backgroundColor: "#d84f57" }}>
        <div class="container-fluid">
          <a class="navbar-brand" href="/">
            <img src={Redbus_png_logo} alt=""
              width="79px" height="49px" />
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">BUS TICKETS</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/">rYde</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/">redRail</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/">rPool</a>
              </li>

            </ul>
            <form class="d-flex" style={{marginRight:"60px"}}>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link" href='/'>Help</a>
                  </li>
                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Manage Booking
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                      <li><a class="dropdown-item" href="/">Action</a></li>
                      <li><a class="dropdown-item" href="/">Another action</a></li>
                      <li><hr class="dropdown-divider" /></li>
                      <li><a class="dropdown-item" href="/">Something else here</a></li>
                    </ul>
                  </li>
                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <img className="signinicon"src={person} alt=""/>
                   </a>
                    <ul class="dropdown-menu "aria-labelledby="navbarDropdown">
                      <li><a class="dropdown-item" href="/">SignIn/SignUp</a></li>
                      
                    </ul>
                  </li>
                </ul>
              </div>
              
            </form>
          </div>
        </div>
      </nav>
    </>
  )
}
