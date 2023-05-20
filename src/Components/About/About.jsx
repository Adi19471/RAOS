import React from "react";

import "./About.css";

import one from "./images/1.webp";
import adi from "./images/IT PROJECTS.png";

export const About = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <h1> WHO ARE WE</h1>
            <p className="mute">
              FreelancerIT is the first freelancing site specialized on the IT
              market from NTH. It is the meeting place of three best friends:
              businesses, freelancers and opportunities. FreelancerIT emerged
              from the desire to create a strong connection between IT
              specialists and projects available both on the domestic market and
              on the international one.
            </p>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col">
            <h1> WHAT WE OFFER</h1>
            <p className="mute">
              At FreelancerIT we provide intermediation services between labor
              and projects. We welcome on the platform all IT enthusiasts: from
              students who want to support themselves while finishing their
              studies to employees who choose to work in their spare time. We
              make sure that everyone gets promoted for their skills, helping
              them find the best projects to work on. The projects are both
              national and international, covering a wide range of skills and
              required expertise, offering a great way to gain experience and be
              presented with exciting opportunities. We offer people the chance
              to learn new things, to work with different people and earn a good
              income effectively. This way we offer opportunities both for
              companies looking for IT specialists and for the ambitious
              freelancers looking for new projects and improve their skills.
            </p>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col">
            <h1> WHAT WE BELIVE IN </h1>
            <p className="mute">
              First and foremost we believe in the people on
              this site. We believe in those who want to develop and grow, both
              small companies and IT professionals and we know that we can
              create something beautiful together. We believe in their dreams,
              we believe in your dreams and we intend to prove the quality of
              the RAOS TECHNOLOGY
            </p>
          </div>
        </div>
      </div>


<div className="container">
<div className="row">
  <div className="col">
  <img src="https://www.freelancerit.ro/userfiles/images/about_us_img1.png" alt=""  className="w-100"/>
  </div>
</div>
</div>

      {/* How can I help you? */}
      <br />
      <br />
      <div className="container">
        <div className="row bg-white text-dark">
          <div className="col-sm-4">
            <h3 className="text-truncate How-Can">How can I help you?</h3>
            <p className="lead">
              Do you need a new, or redesigned, business site, online shop or a
              custom web application? Or do you need improvements to your
              existing site?
            </p>

            <p className="lead">
              My office is in Begampet but I design and develop websites for
              companies, individuals and agencies across india, London and the
              UK remotely to build beautiful, fast, intuitive websites.
            </p>
          </div>

          <div
            className="col-sm-8"
            style={{ height: "500px", fontSize: "3px", fontFamily: "cursive" }}
          >
            <div className="row">
              <div className="col-sm-6">
                <h5 className="text-title">Business Websites</h5>
                <p className="lead">
                  Websites to increase your new enquiries: marketing and
                  brochure websites.
                </p>
                <button className="btn btn-primary btn-sm  shadow-5-strong fa-1x">
                  <h5>Business Websites</h5>
                </button>
              </div>

              <div className="col-sm-6">
                <h5 className="text-title"> Web Apps</h5>
                <p className="lead">
                  Custom built web apps and portals that solve your business
                  problem, or make your new idea a reality.
                </p>

                <button className="btn btn-primary btn-sm  shadow-5-strong fa-1x">
                  <h5>Web Apps</h5>
                </button>
              </div>
            </div>

            <br />
            <br />
            <div className="row">
              <div className="col-sm-6">
                <h5 className="text-title">Online Shops & Ecommerce</h5>
                <p className="lead">
                  Custom built e-commerce solutions that work quickly, securely
                  and look amazing.
                </p>

                <button className="btn btn-primary btn-sm  shadow-5-strong fa-1x">
                  <h5>Online Shops & Ecommerce</h5>
                </button>
              </div>

              <div className="col-sm-6">
                <h5 className="text-title"> MERN Stack</h5>
                <p className="lead">
                  I'm an MERN Stack developer and create bespoke web portals,
                  dashboard and web apps using the TALL stack: Tailwind CSS,
                  Bootstarp css,Meterial UI...
                </p>

                <button className="btn btn-primary btn-sm  shadow-5-strong fa-1x">
                  <h5> MERN Stack</h5>
                </button>
              </div>
            </div>
          </div>
        </div>

        <h2 className="columBottom"> Why would you hire me?</h2>
        <p className="lead">
          As well as having technical skills, I also have a number of
          professional and personal attributes which make me a delight to work
          with. Here are a few reasons why you should hire me as your web
          developer.
        </p>
      </div>

      <div className="container  why-shoud">
        <div className="row">
          <div className="col-sm-3 columdata">
            <h3 className="card-text columBottom">Search engine skills</h3>
            <p className="lead">
              I'll implement Google's best practices and provide you advice on
              your content strategy and creation.
            </p>
          </div>

          <div className="col-sm-3 columdata">
            <h3 className="card-text columBottom">
              Developer&nbsp;&nbsp;designer
            </h3>
            <p className="lead">
              I design and develop websites so you don't have to explain your
              idea or requirements to more than one person.
            </p>
          </div>

          <div className="col-sm-3 columdata">
            <h3 className="card-text columBottom">Easy to contact</h3>
            <p className="lead">
              I don't dodge emails or phone calls. Try emailing me now with a
              brief to see how fast I respond.
            </p>
          </div>

          <div className="col-sm-3 columdata">
            <h3 className="card-text columBottom">Honest</h3>
            <p className="lead">
              Transparent about pricing, decision making and knowing the limit
              of my abilities. Strictly no sales spiel.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
