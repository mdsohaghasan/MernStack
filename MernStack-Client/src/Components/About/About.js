import React from 'react'
import PageTitle from '../Home/PageTitle';
import './About.css';
import img from './img/sohag.png'

function About() {
  return (
    <div class="container">
      <div class="row">
        <div class="col m-5">
          <div class="intro">
            <h3>Hi, I'm</h3>
            <h1>Sohag Hasan</h1>
            <h3>FrontEnd developer</h3>
            <p>Hello! I'm Sohag Hasan a passionate software engineer. I develop web applications, mobile
              applications, and desktop applications. My core skill is based on JavaScript and I love to do
              most of the things using JavaScript. I love to make the web more open to the world. I have
              graduated with a bachelor's degree in Computer Science Engineering from Chandigarh University at
              Punjab, India in 2020. I am available for any kind of job opportunity that suits my interests.
            </p>
            <button class="btn btn-primary">Click Me</button>
          </div>

        </div>

        <div class="col m-5">
          <div class="max-width:50% height:auto">
            <img src={img} class="img-fluid rounded" alt="sohag-pic" />
          </div>

        </div>
      </div>

      <div class="row">
        <div class="col m-5">
          <h2>Skills</h2>

          <div class="bg-info pt-2 pb-1 px-1 m-2">
            <p class="ms-3">JAVASCRIPT</p>
            <div class="progress m-3" style={{ height: '30px' }}>
              <div class="progress-bar bg-success" role="progressbar" style={{ width: '75%' }} aria-valuenow="25"
                aria-valuemin="0" aria-valuemax="100">75%</div>
            </div>
          </div>

          <div class="bg-info pt-2 pb-1 px-1 m-2">
            <p class="ms-3">REACT</p>
            <div class="progress m-3" style={{ height: '30px' }}>
              <div class="progress-bar bg-success" role="progressbar" style={{ width: "65%" }} aria-valuenow="25"
                aria-valuemin="0" aria-valuemax="100">65%</div>
            </div>
          </div>

          <div class="bg-info pt-2 pb-1 px-1 m-2">
            <p class="ms-3">EXPRESS JS</p>
            <div class="progress m-3" style={{ height: '30px' }}>
              <div class="progress-bar bg-success" role="progressbar" style={{ width: "50%" }} aria-valuenow="25"
                aria-valuemin="0" aria-valuemax="100">50%</div>
            </div>
          </div>

        </div>
        <div class="col">
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod, molestiae?
          </p>
        </div>
      </div>

      <div class="row">
        <div class="col-4">
          <div class="border border-primary border-3 rounded m-3 p-3">
            <i class="bi bi-apple text-primary"></i>
            <p>Apple</p>
          </div>
        </div>
        <div class="col-4">
          <div class="border border-primary border-3 rounded m-3 p-3">
            <i class="bi bi-apple text-primary"></i>
            <p>Apple</p>
          </div>
        </div>

        <div class="col-4">
          <div class="border border-primary border-3 rounded m-3 p-3">
            <i class="bi bi-apple text-primary"></i>
            <p>Apple</p>
          </div>
        </div>
      </div>
      {/* contact section  */}
      <div class="contact-bg">
        <div class="row ">
          <div class="col-6"></div>
          <div class="col-6">
            <div class="contact-box bg-info w-75 p-5 m-5">
              <h3>Email</h3>
              <h5>mailsohaghasan@gmail.com</h5>
              <address>Address</address>
              <p>Mohammadpur,Dhaka</p>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default About



