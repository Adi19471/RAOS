import React from "react";
import "./Service.css";
import Fullstack from "./images/accadamic.jpg";
import Html from "./images/Html.jpg";
import Mern from "./images/Mern.jpg";
import Python from "./images/Python.jpg";
import Mean from "./images/Mean.jpg";

import Java from "./images/java.jpg";
import Net from "./images/net.jpg";
import ml from "./images/ml.jpg";
import data from "./images/data.jpg";



import BLUE from "./images/BLUE.jpg";
import SOFTWARE from "./images/Software.png";


<img src={Java} className="img-thumbnail    " alt="" />


const Service = () => {
  return (
    <>



      <div className="container">
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-body">
                <h3 className="text-center alert alert-secondary" >Service </h3>
                <h6 className="text-center">
                  Efficient And Reliable work at Freelancer projects.

                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>



      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col-sm-6">
            <img src={BLUE} alt=""  className="w-100 h-100"/>

          </div>

          <div className="col-sm-6">
            <img src={SOFTWARE} alt=""  className="w-100 h-100" />

          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <marquee className="blink">
             
            
              <img src={Html} className="img-thumbnail    merquueImages" alt="" />
              <img src={Mern} className="img-thumbnail    merquueImages" alt="" />
              <img src={Python} className="img-thumbnail    merquueImages" alt="" />
              <img src={Mean} className="img-thumbnail   merquueImages " alt="" />
              <img src={Java} className="img-thumbnail   merquueImages " alt="" />
              <img src={Net} className="img-thumbnail   merquueImages " alt="" />
              <img src={ml} className="img-thumbnail    merquueImages" alt="" />
              <img src={data} className="img-thumbnail  merquueImages  " alt="" />

              
            </marquee>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <div class="card">
              <i class="fas fa-blog fa-10x  text-center"></i>

              <div class="card-body">
                <h5 class="card-title">Website Maintenance</h5>
                <p class="card-text">
                  Stay ahead with our website maintenance services. Trust our
                  experts to keep your site updated, secure and running
                  smoothly.
                </p>
                <a href="#!" class="btn btn-primary">
                  Button
                </a>
              </div>
            </div>
          </div>

          <div className="col-sm-6">
            <div class="card">
              <i class="fas fa-paint-brush fa-10x text-center"></i>

              <div class="card-body">
                <h5 class="card-title">E-Commerce Website</h5>
                <p class="card-text">
                  Unleash the power of online sales with our cutting-edge
                  e-commerce website design that is Secure, engaging and
                  user-friendly.
                </p>
                <a href="#!" class="btn btn-primary">
                  Button
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-6">
            <div class="card">
              <i class="fas fa-vr-cardboard fa-10x text-center"></i>
              <div class="card-body">
                <h5 class="card-title">WordPress Error/Problem Fix</h5>
                <p class="card-text">
                  We offer fast and effective solutions to fix any problem and
                  get your website back up and running smoothly. Contact us for
                  professional assistance.
                </p>
                <a href="#!" class="btn btn-primary">
                  Button
                </a>
              </div>
            </div>
          </div>

          <div className="col-sm-6">
            <div class="card">
              <i class="fab fa-internet-explorer fa-10x text-center"></i>

              <div class="card-body">
                <h5 class="card-title">Website Design</h5>
                <p class="card-text">
                  Elevate your online presence with a custom website design. Our
                  team of experts crafts visually appealing and user-friendly
                  sites to help you stand out and achieve your goals.
                </p>
                <a href="#!" class="btn btn-primary">
                  Button
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* our process */}

      <div className="container">
        <div className="row">
          <div className="col-2 mt-5 ">
            <h4> Our Process</h4>
          </div>

          <div className="col-sm-10">
            <p className="lead">
              Transform your online presence with our 3-step website design
              process. Our team of web designers in Hyderabad assesses your
              needs, creates a custom design, and provides ongoing maintenance
              for a website that accurately reflects your brand and drives
              results.
            </p>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-sm-4  ">
            <div class="card text-center stepData">
              <div class="card-header rounded-pill">Step1</div>
              <div class="card-body">
                <h5 class="card-title">Assessment</h5>
                <p class="card-text">
                  Our team conducts a thorough analysis of your business needs,
                  target audience, and competitors to create a customized
                  approach to your web design project.
                </p>
                <a href="#" class="btn btn-primary">
                  Contact Us
                </a>
              </div>
              <div class="card-footer text-muted">Touch With Me</div>
            </div>
          </div>

          {/* second */}

          <div className="col-sm-4">
            <div class="card text-center stepData">
              <div class="card-header rounded-pill">Step2</div>
              <div class="card-body">
                <h5 class="card-title">Design And Development</h5>
                <p class="card-text">
                  Our designers and developers create a visually appealing and
                  functional website that aligns with your brand and accurately
                  reflects your unique vision.
                </p>
                <a href="#" class="btn btn-primary">
                  Contact Us
                </a>
              </div>
              <div class="card-footer text-muted">Touch With Me</div>
            </div>
          </div>

          {/* thrird */}

          <div className="col-sm-4">
            <div class="card text-center stepData">
              <div class="card-header rounded-pill">Step3</div>
              <div class="card-body">
                <h5 class="card-title">Launch & Maintenance</h5>
                <p class="card-text">
                  Upon completion, we launch your website and provide ongoing
                  maintenance and support to ensure that your site remains
                  up-to-date, secure....
                </p>
                <a href="#" class="btn btn-primary">
                  Contact Us
                </a>
              </div>
              <div class="card-footer text-muted">Touch With Me</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
