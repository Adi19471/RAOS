import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <>
      <>
        {/* Remove the container if you want to extend the Footer to full width. */}
        <div className="container-fluid my-5  ">
          <footer
            className=" text-white text-center text-lg-start"
            style={{ backgroundColor: "#23242a" }}
          >
            {/* Grid container */}
            <div className="container p-4 footer">
              {/*Grid row*/}
              <div className="row mt-4">
                {/*Grid column*/}
                <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
                  <h5 className="text-uppercase mb-4">About company</h5>
                  <p>
                    There are only a few simple steps between you and a whole
                    range of benefits! With a simple profile that features the
                    company description, its field of work, the employees and
                    core values, your company can enjoy a better visibility on
                    the market.
                  </p>
                  <div className="mt-4">
                    {/* Facebook */}
                    <a
                      type="button"
                      className="btn btn-floating btn-warning btn-lg"
                    >
                      <i className="fab fa-facebook-f" />
                    </a>
                    {/* Dribbble */}
                    <a
                      type="button"
                      className="btn btn-floating btn-warning btn-lg"
                    >
                      <i className="fab fa-dribbble" />
                    </a>
                    {/* Twitter */}
                    <a
                      type="button"
                      className="btn btn-floating btn-warning btn-lg"
                    >
                      <i className="fab fa-twitter" />
                    </a>
                    {/* Google + */}
                    <a
                      type="button"
                      className="btn btn-floating btn-warning btn-lg"
                    >
                      <i className="fab fa-google-plus-g" />
                    </a>
                    {/* Linkedin */}
                  </div>
                </div>
                {/*Grid column*/}
                {/*Grid column*/}
                <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                  <h5 className="text-uppercase mb-4 pb-1">Search something</h5>
                  <div className="form-outline form-white mb-4">
                    <input
                      type="text"
                      id="formControlLg"
                      className="form-control form-control-lg"
                    />
                    <label
                      className="form-label"
                      htmlFor="formControlLg"
                      style={{ marginLeft: 0 }}
                    >
                      Search
                    </label>
                    <div className="form-notch">
                      <div
                        className="form-notch-leading"
                        style={{ width: 9 }}
                      />
                      <div
                        className="form-notch-middle"
                        style={{ width: "48.8px" }}
                      />
                      <div className="form-notch-trailing" />
                    </div>
                  </div>
                  <ul className="fa-ul" style={{ marginLeft: "1.65em" }}>
                    <li className="mb-3">
                      <span className="fa-li">
                        <i className="fas fa-home" />
                      </span>
                      <span className="ms-2">Chintal Hyderabad 500054</span>
                    </li>
                    <li className="mb-3">
                      <span className="fa-li">
                        <i className="fas fa-envelope" />
                      </span>
                      <span className="ms-2">accadamic.info2023@gmail.com</span>
                    </li>
                    <li className="mb-3">
                      <span className="fa-li">
                        <i className="fas fa-phone" />
                      </span>
                      <span className="ms-2">+ 8341553216</span>
                    </li>
                  </ul>
                </div>
                {/*Grid column*/}
                {/*Grid column*/}
                <div className="col-lg-4 col-md-6 mb-4 mb-md-0 ">
                  <h5 className="text-uppercase mb-4">Opening hours</h5>
                  <table className="table text-center text-white">
                    <tbody className="font-weight-normal footer">
                      <tr>
                        <td>Mon - Thu:</td>
                        <td>8am - 9pm</td>
                      </tr>
                      <tr>
                        <td>Fri - Sat:</td>
                        <td>8am - 1am</td>
                      </tr>
                      <tr>
                        <td>Sunday:</td>
                        <td>9am - 10pm</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                {/*Grid column*/}
              </div>
              {/*Grid row*/}
            </div>
            {/* Grid container */}
            {/* Copyright */}
            <div
              className="text-center p-3"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
            >
              • All rights reserved
              <a className="text-white" href="">
                &nbsp; Rao's Technology
              </a>
            </div>
            {/* Copyright */}
          </footer>
        </div>
        {/* End of .container */}
      </>
    </>
  );
};

export default Footer;
