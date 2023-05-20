import React from "react";
import "./Howitworks.css";

import Require from "./images/recrutare 2.png";
import Update from "./images/update profile3.png";

const Howitworks = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6">
            <img src={Require} alt="" className="w-100  h-100" />
          </div>

          <div className="col-sm-6">
            <img src={Update} alt="" className="w-100 h-100" />
          </div>
        </div>
      </div>



      <div className="container-fluid mt-5">
        <div className="row">
        

          <div className="col-sm-6">
            <img src={Update} alt="" className="w-100 h-100" />
          </div>

          <div className="col-sm-6">
            <img src={Require} alt="" className="w-100  h-100" />
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col">
            <h3>How it works</h3>
            <strong>
              <i>
                It couldn't be easier! If you are an IT person, you have an IT
                company or are simply in need of someone who has expertise in
                the field, you just need to give the platform a spin and you'll
                find what you need.
              </i>
            </strong>

            <div className="card">
              <div className="card-header">1. FOR FREELANCERS</div>
              <div className="card-body">
                <h5 className="card-title">
                  The best thing for freelancers is that everything is free. The
                  steps are simple:
                </h5>
                <p className="card-text">
                  You create your account; <br />
                  You fill in your profile with your personal info; <br />
                  Companies may contact anytime for remote projects; <br />
                  or...
                </p>

                <p className="card-text">
                  You can apply directly for the available projects on the
                  platform, where you think you fit best. <br />
                  When a company is interested in your services, they will
                  contact you to negotiate the terms of the collaboration. Once
                  that is settled you can start working right away. You also
                  have the option to apply on any projects that you find on the
                  platform. Don't wait to be contacted, take the initiative and
                  make yourself noticed by showing your interest in joining the
                  project.
                  <br className="mt-5" />
                  <p className="mt-5">
                    One important note, though. Your should aim to fill-in all
                    the fields on your profile page. This will help you get
                    involved in the projects you are best skilled for. At the
                    end of the day, the purpose is to find the perfect
                    freelancer for each project and only by providing complete
                    information about yourself you can show that you are the
                    right person for the job.
                  </p>
                </p>
                <a href="#" className="btn btn-primary">
                  Contact with Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col">
            <>
              <ul className="nav nav-tabs mx-5 py-5" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    id="home-tab"
                    data-toggle="tab"
                    data-target="#home"
                    type="button"
                    role="tab"
                    aria-controls="home"
                    aria-selected="true"
                  >
                    For Freelancers
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="profile-tab"
                    data-toggle="tab"
                    data-target="#profile"
                    type="button"
                    role="tab"
                    aria-controls="profile"
                    aria-selected="false"
                  >
                    For Companies
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="contact-tab"
                    data-toggle="tab"
                    data-target="#contact"
                    type="button"
                    role="tab"
                    aria-controls="contact"
                    aria-selected="false"
                  >
                    We recruit for you!
                  </button>
                </li>
              </ul>
              <div className="tab-content" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="home"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  It doesn‘t matter if you are an IT student, an employee or a
                  freelancer, you will find your place here. Whether you are
                  looking for an extra income or doing this for fun, here is the
                  right place to start. Create your profile and apply on your
                  favorite projects or simply wait to be contacted and be
                  presented with interesting job opportunities.
                </div>
                <div
                  className="tab-pane fade"
                  id="profile"
                  role="tabpanel"
                  aria-labelledby="profile-tab"
                >
                  Pick your team or contact the desired person directly and
                  start whenever you want. Simplify the recruitment process by
                  describing your project and convincing freelancers to apply.
                  You can also choose to concentrate on promoting your company
                  in a smart and effective way. Whatever your choice, you can do
                  it with us!
                </div>
                <div
                  className="tab-pane fade"
                  id="contact"
                  role="tabpanel"
                  aria-labelledby="contact-tab"
                >
                  We know what it‘s like to be time-strapped or just in need of
                  an expert opinion and have nowhere to start from. We can
                  step-up and help by taking all this off your hands! This way
                  you will benefit of our proven team of recruiters who will
                  pick the best people for your projects.
                </div>
              </div>
            </>
          </div>
        </div>
      </div>
    </>
  );
};

export default Howitworks;
