import React from 'react'
import Layout from '../components/layout'
import bg1 from '../assets/images/about_us/about-bg-1.svg';
import bg2 from '../assets/images/about_us/about-bg-2.svg';

import '../assets/scss/About.scss';
export default function about() {
  return (
  <Layout>
    <div className="about-body">
        <div className="row d-flex about-main-div">
          <div className="col-md-6 col-xl-8 d-flex flex-column justify-content-center">
            <div className="row d-flex justify-content-center">
              <div className="col-xl-12 offset-xl-1 d-flex about-div-sub">
                <h1 className="d-flex flex-grow-1 flex-shrink-1 align-items-center align-content-center align-self-center about-header-first">
                  About Us
                </h1>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-11">
                <h6 className="d-inline-flex align-content-center align-self-center img-fluid about-header-second">
                  HackSlash, currently under the Mozilla Campus Clubs Network, is an all student driven developers community&nbsp;located in the National Institute of Technology Patna. The club strives to build and improve the open sourcing&nbsp;environment
                  and the coding culture of the whole city of Patna and eventually the whole state of Bihar. The will&nbsp;power and determination of each Developers, Competitive Coders, Designers and Innovative thinkers is what&nbsp;governs
                  our great community.<br/>
                </h6>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 col-xl-4 offset-xl-1 about-div-second">
            <img className="visible img-fluid about-img" src={bg1} alt='bg'/>
          </div>
        </div>
        <div className="row d-flex about-div-third" id="story">
          <div className="col-md-4 col-lg-4 col-xl-4 offset-xl-1 about-div-second">
            <img className="visible img-fluid about-img" src={bg2} alt='bg'/>
          </div>
          <div className="col-md-6 col-xl-8 d-flex flex-column justify-content-center">
            <div className="row d-flex justify-content-center">
              <div className="col-xl-12 offset-xl-1 d-flex about-div-sub">
                <h1 className="d-flex flex-grow-1 flex-shrink-1 align-items-center align-content-center align-self-center about-header-first">
                  Our Story
                </h1>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-11">
                <h6 className="d-inline-flex align-content-center align-self-center img-fluid about-header-second">
                  Formed as a college’s development club in NIT Patna, it was established on 2018, with only 10 members. The main reason of taking such a step, i.e. to form the HackSlash Club, was because of the lack of awareness and opportunities
                  for the students to achieve their maximum potential and also to bring their attention to the current need in the field of development and open sourcing contribution. It started out as a weekly meet up in&nbsp;the cafeteria
                  to fully functioning weekend classes and afternoon informative sessions. Currently It is holding&nbsp;over<br/>15 core members and 112 interested members of all years and degree programs in the institute itself. We are&nbsp;currently
                  striving of increasing our reach to all other interested students in other technical institutes in Patna.<br/>
                </h6>
              </div>
            </div>
          </div>
        </div>
        <div className="row d-flex justify-content-center align-content-cente about-bottom-divr" id="team">
          <div className="col d-flex justify-content-center align-content-center">
            <h1 className="about-header-first" id="t">Our Team</h1>
          </div>

        </div>
      </div>
  </Layout>
  )
}
