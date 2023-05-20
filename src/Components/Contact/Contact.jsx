import React, { useRef } from "react";

import emailjs from "@emailjs/browser";

import Anounce from "./image/anounce.jpg";
import Reporter from "./image/Reporter.jpg";
import Current from "./image/Current.jpg";
import Content from "./image/Content.png";
import Notification from "./image/Notification.jfif";
import Company from "./image/Company.jfif";

import { Link } from "react-router-dom";

import "./Contact.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_x8f4kyc",
        "template_f5344qm",
        form.current,
        "91QnoJCMlMVNIAcw7"
      )
      .then(
        (result) => {
          alert(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <h2 className="text-center mx-5  alert-success bg-opacity-100  text-bg-info">
        For More Information Contact .....me
      </h2>

      <div className="container py-5">
        <div className="card">
          <p className="lead">
            The time has come for students to be more practical skill-oriented
            rather than theoretical knowledge. As it is contextual and social in
            nature and helps you acquire the specific techniques that become the
            tools of your trade. We boost practical skill-based training for
            engineering students through live projects and enable them with an
            industry-based skill set. <br />
            <strong className="text-success">Raos </strong> is “A
            multi-disciplinary platform for Academic Institutions, Industries
            and Researchers”. We are one of the leading organizations in
            providing technical excellence to Academic Institutions, Industries,
            and Researchers. I am proud to be part of an excellent team that
            strives on reaching this success and greatness. We appreciate you
            for taking your valuable time to visit our
          </p>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-sm-6  mt-5">
            <h4 className="text-justify-content-around Do-You">
              Do You Need A Professional Website? Fill Out This Form To Get In
              Touch.
            </h4>
            <form ref={form} onSubmit={sendEmail}>
              {/* 2 column grid layout with text inputs for the first and last names */}
              <div className="row mb-4">
                <div className="col ">
                  <div className="form-outline mb-4">
                    <input
                      type="text"
                      id="form3Example1"
                      className="form-control"
                      placeholder="fname"
                      name="user_name"
                    />
                    <label className="form-label" htmlFor="form3Example1">
                      First name
                    </label>
                  </div>
                </div>
              </div>
              {/* Email input */}
              <div className="form-outline mt-4">
                <input
                  type="email"
                  id="form3Example3"
                  className="form-control"
                  placeholder="email"
                  name="user_email"
                />
                <label className="form-label" htmlFor="form3Example3">
                  Email Address
                </label>
              </div>

              {/* message */}
              <div className="form-outline mt-4">
                <input
                  type="text"
                  id="form3Example3"
                  className="form-control"
                  placeholder="Message"
                  name="message"
                />
                <label className="form-label" htmlFor="form3Example3">
                  Message Information
                </label>
              </div>

              {/* Checkbox */}
              <div className="form-check d-flex justify-content-center mb-4">
                <input
                  className="form-check-input me-2"
                  type="checkbox"
                  defaultValue=""
                  id="form2Example33"
                  defaultChecked=""
                />
                <label className="form-check-label" htmlFor="form2Example33">
                  Subscribe to our newsletter
                </label>
              </div>
              {/* Submit button */}
              <button type="submit" className="btn btn-primary btn-block mb-4">
                Sign up
              </button>
              {/* Register buttons */}
              <div className="text-center">
                <p>or Contact With Me:-</p>
                <button
                  type="button"
                  className="btn btn-secondary btn-floating mx-1"
                >
                  <Link
                    to="
                  https://www.facebook.com/adinarayanareddy.kumatha.1"
                    target="_blank"
                  >
                    {" "}
                    <i className="fab fa-facebook-f" />
                  </Link>
                </button>
                <button
                  type="button"
                  className="btn btn-secondary btn-floating mx-1"
                >
                  <Link
                    to="https://www.instagram.com/invites/contact/?i=dxlg0xvm3wmh&utm_content=eybwlhw"
                    target="_blank"
                  >
                    {" "}
                    <i class="fab fa-instagram"></i>
                  </Link>
                </button>
                <button
                  type="button"
                  className="btn btn-secondary btn-floating mx-1"
                >
                  <Link to="https://www.linkedin.com/feed/" target="_blank">
                    {" "}
                    <i class="fab fa-linkedin-in"></i>
                  </Link>
                </button>
                <button
                  type="button"
                  className="btn btn-secondary btn-floating mx-1"
                >
                  <Link to="https://adi19471.github.io/" target="_blank">
                    {" "}
                    <i className="fab fa-github" />
                  </Link>
                </button>
              </div>
            </form>
          </div>

          {/* second col-sm-6 */}
          <div className="col-sm-6  text-xl-end">
            <h3>How We Can Help...?</h3>
            <hr className="lineheight" />
            <div className="row mt-5">
              <div className="col-sm-4">
                <img
                  src={Anounce}
                  className="img-fluid rounded-circle"
                  alt="Townhouses and Skyscrapers"
                />

                <h6>I want To Advatize On Web Applications...?</h6>
              </div>

              <div className="col-sm-4">
                <img
                  src={Reporter}
                  className="img-fluid rounded-circle"
                  alt="Townhouses and Skyscrapers"
                />

                <h6>I'm reporter or Work in the media?</h6>
              </div>

              <div className="col-sm-4">
                <img
                  src={Current}
                  className="img-fluid rounded-circle"
                  alt="Townhouses and Skyscrapers"
                />

                <small>I am Current Employer...?</small>
              </div>
            </div>

            {/* second 2 para graph  */}
            <div className="row mt-3">
              <div className="col-sm-4">
                <img
                  src={Content}
                  className="img-fluid rounded-circle"
                  alt="Townhouses and Skyscrapers"
                />

                <h6>I want To Write for SEJ?</h6>
              </div>

              <div className="col-sm-4">
                <img
                  src={Notification}
                  className="img-fluid rounded-circle"
                  alt="Townhouses and Skyscrapers"
                />

                <h6>I have a hot News tip?</h6>
              </div>

              <div className="col-sm-4">
                <img
                  src={Company}
                  className="img-fluid rounded-circle"
                  alt="Townhouses and Skyscrapers"
                />

                <small>I represent a Company ?</small>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="col">
          <iframe width="1220" height="400" src="https://www.youtube.com/embed/O9kf9xPO6m4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
        </div>
      </div>



    </>
  );
};

export default Contact;
