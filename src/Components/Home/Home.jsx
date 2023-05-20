import React from "react";
import { useParams } from "react-router-dom";
import "./Home.css";

import One from "./images/Home.gif";
import Two from "./images/1.gif";

import ONE from "./images/accadamic1.jpg";
import TWO from "./images/accadamic2.jpg";
import THREE from "./images/accadamic3.jpg";

import Monggodb from "./images/Mongodb.jpg";
import Express from "./images/Express.jpg";
import Reactjs from "./images/Reactjs.jpg";
import Nodejs from "./images/Nodejs.jpg";

import Backend from "./images/Back.gif";
import python from "./images/python.webp";

import machine from "./images/machine-learning-1.jpg";
import java from "./images/Java.jpg";
import net from "./images/net.jpg";

import Info from "./images/info.jpg";

import Human from "./images/Human.jpg";

const Home = () => {
  const params = useParams();
  const userID = params.userID;
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <>
              {/* Carousel wrapper */}
              <div
                id="carouselBasicExample"
                className="carousel slide carousel-fade"
                data-mdb-ride="carousel"
              >
                {/* Indicators */}
                <div className="carousel-indicators">
                  <button
                    type="button"
                    data-mdb-target="#carouselBasicExample"
                    data-mdb-slide-to={0}
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  />
                  <button
                    type="button"
                    data-mdb-target="#carouselBasicExample"
                    data-mdb-slide-to={1}
                    aria-label="Slide 2"
                  />
                  <button
                    type="button"
                    data-mdb-target="#carouselBasicExample"
                    data-mdb-slide-to={2}
                    aria-label="Slide 3"
                  />
                </div>
                {/* Inner */}
                <div className="carousel-inner">
                  {/* Single item */}
                  <div className="carousel-item active">
                    <img
                      src="https://www.freelancerit.ro/userfiles/res/corporate%20vs%20freelancer3.png"
                      className="d-block w-100"
                      alt="Sunset Over the City"
                      style={{ height: "550px" }}
                    />
                    <br />
                    <div className="carousel-caption d-none d-md-block bg-white text-dark mt-5">
                      <h5 className="animate__animated animate__flip">
                        Helping Hands
                      </h5>
                      <p>
                        Take our hand, and together we can reach so much
                        further...
                      </p>
                    </div>
                  </div>
                  {/* Single item */}
                  <div className="carousel-item">
                    <img
                      src="https://www.freelancerit.ro/userfiles/res/post%20projects3.png"
                      className="d-block w-100"
                      alt="Canyon at Nigh"
                    />  <br /><br /><br />
                    <div className="carousel-caption mt-5 d-none d-md-block bg-white text-dark">
                      <h5 className="animate__animated animate__flip">
                        100% Quality Assurance
                      </h5>
                      <p>
                        We are committed to provide 100% customer satisfaction
                        and hence you can customize your requirements the way
                        you want...
                      </p>
                    </div>
                  </div>
                  {/* Single item */}
                  <div className="carousel-item">
                    <img
                      src="https://www.freelancerit.ro/userfiles/res/schema3%20(1).png"
                      className="d-block w-100"
                      alt="Cliff Above a Stormy Sea"
                    />  <br /> <br /> <br /> 
                    <div className="carousel-caption mt-5 d-none d-md-block bg-white text-dark">
                      <h5 className="animate__animated animate__flip">
                        On Time Delivery
                      </h5>
                      <p>Thereby you can be assured of your submission.</p>
                    </div>
                  </div>
                </div>
                {/* Inner */}
                {/* Controls */}
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-mdb-target="#carouselBasicExample"
                  data-mdb-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  />
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-mdb-target="#carouselBasicExample"
                  data-mdb-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  />
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
              {/* Carousel wrapper */}
            </>
          </div>
        </div>
      </div>
      <br />
      <h3 className="text-center  blink_me">
        We Provide Best Solution To Your Ideas
      </h3>
      <div className="container">
        <div className="row">
          <div className="col">
            <h3 className="text-center">Find talented freelancers</h3>

            <img src={Info} alt="" className="w-100" />
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-8  text-primary fa-1x">
            <h2 className="text-center">
              <b>Why Freelancer IT</b>
            </h2>
            <h6 className="text-center">
              “All great things are simple and most can be expressed in just a
              few words”
            </h6>
            <ol>
              Freedom :{" "}
              <li className="list-unstyled">
                You can make your own decisions, work with the people you like,
                while building your schedule the way you want.
              </li>
            </ol>

            <ol>
              Duty:{" "}
              <li className="list-unstyled">
                {" "}
                One of the most comforting feelings is to know that you can
                count on reliable and dedicated people, people that work with
                pleasure and manage to deliver tasks on time.
              </li>
            </ol>

            <ol>
              Affordable:{" "}
              <li className="list-unstyled">
                It costs much less than working with digital agencies, staffing
                businesses or hiring in-house.
              </li>
            </ol>

            <ol>
              Efficient:{" "}
              <li className="list-unstyled">
                {" "}
                Work with Freelancers remotely and save on management overhead.
              </li>
            </ol>

            <ol>
              Efficient:{" "}
              <li className="list-unstyled">
                {" "}
                Hope: We believe in change and in the fact that things can be
                done differently. We believe in a dream and we are searching for
                people to share it with.{" "}
              </li>
            </ol>
          </div>

          <div className="col-sm-4">
            <img src={Human} alt=""   className="w-100 h-100"/>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <a className="ripple" href="#!">
              <img alt="example" class="img-fluid rounded" src={Two} />
            </a>
          </div>

          <div className="col-sm-6 mt-5">
            <h4 className="text-center Home-View">Web Developer</h4>
            <p className="mute font-monospace  mt-5">
              As a Front End & Back End Dev I'm resposible to create creative
              layouts, That layouts should useful to other Developers can they
              use very easily in their Project and this help they work very
              easier
            </p>

            <div className="text-md-start">
              <h4 className="text-center Home-View">Web Designer</h4>
              <p className="mute font-monospace  mt-5">
                I'm Really enthusiastic to design a site before developing then
                the clients and users can get a overview what is the final
                product.
              </p>
            </div>
          </div>
        </div>

        {/* second */}

        <div className="row">
          <div className="col-sm-6 mt-5">
            <p className="mute font-monospace  text-start py-2 mt-5">
              Back-end development means working on server-side software, which
              focuses on everything you can’t see on a website. Back-end
              developers ensure the website performs correctly, focusing on
              databases, back-end logic, application programming interface
              (APIs), architecture, and servers. They use code that helps
              browsers communicate with databases, store, understand, and delete
              data.
            </p>

            <div className="text-md-end">
              <h4 className="text-center">Full Stack Web Applicatin </h4>
              <p className="mute font-monospace  text-start py-2  mt-5">
                In the tech world, we call this the “front-end” and the
                “back-end” respectively. People who work on these components
                would be called “front-end developers” and “back-end
                developers.” Creating both the front and back-end of a website
                comes with its own challenges, but one can’t exist without the
                other.
              </p>
            </div>
          </div>

          <div className="col-sm-6">
            <a className="ripple" href="#!">
              <img alt="example" className="img-fluid rounded" src={Backend} />
            </a>
          </div>
        </div>
      </div>
      <dv className="container">
        <div className="row">
          <div className="col">
            <>
              {/* Jumbotron */}
              <div
                className="bg-image p-1 text-center shadow-1-strong rounded mb-5 text-white"
                style={{
                  backgroundImage:
                    'url("https://cdn.pixabay.com/photo/2017/08/15/08/23/stars-2643089_1280.jpg")',
                }}
              >
                <h1 className="mb-3 h2"> MERN STACK APPLICATION </h1>
                <p>
                  <div className="row">
                    <div className="col-sm-3">
                      <div className="card">
                        <img
                          src={Monggodb}
                          className="card-img-top"
                          alt="Fissure in Sandstone"
                        />
                        <div className="card-body bg-dark text-white">
                          <h5 className="card-title">MONGODB </h5>
                          <p
                            className="card-text text-sm-start font-monospace "
                            style={{ height: "200px" }}
                          >
                            MongoDB is a source-available cross-platform
                            document-oriented database program. Classified as a
                            NoSQL database program, MongoDB uses JSON-like
                            documents with optional schemas...
                          </p>
                          <a
                            href="https://www.mongodb.com/what-is-mongodb"
                            target="_blank"
                            className="btn btn-primary"
                          >
                            More
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* secodn  */}

                    <div className="col-sm-3">
                      <div className="card bg-dark text-white">
                        <img
                          src={Express}
                          className="card-img-top"
                          alt="Fissure in Sandstone"
                        />
                        <div className="card-body">
                          <h5 className="card-title">Express Js</h5>
                          <p
                            className="card-text text-sm-start font-monospace "
                            style={{ height: "200px" }}
                          >
                            Express is a minimal and flexible Node.js web
                            application framework that provides a robust set of
                            features for web and mobile applications...
                          </p>
                          <a
                            href="https://expressjs.com/"
                            target="_blank"
                            className="btn btn-primary"
                          >
                            More
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* third */}

                    <div className="col-sm-3 ">
                      <div className="card bg-dark text-white">
                        <img
                          src={Reactjs}
                          className="card-img-top"
                          alt="Fissure in Sandstone"
                        />
                        <div className="card-body">
                          <h5 className="card-title">React Js </h5>
                          <p
                            className="card-text text-sm-start font-monospace"
                            style={{ height: "190px" }}
                          >
                            React is a free and open-source front-end JavaScript
                            library for building user interfaces based on
                            components. It is maintained by Meta and a community
                            ...
                          </p>
                          <a
                            href="https://reactjs.org/"
                            target="_blank"
                            className="btn btn-primary"
                          >
                            More
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* fourth */}

                    <div className="col-sm-3 h-90">
                      <div className="card bg-dark text-white ">
                        <img
                          src={Nodejs}
                          className="card-img-top"
                          alt="Fissure in Sandstone"
                        />
                        <div className="card-body">
                          <h5 className="card-title">Node Js</h5>
                          <p
                            className="card-text text-sm-start font-monospace"
                            style={{ height: "200px" }}
                          >
                            Node.js is a cross-platform, open-source server
                            environment that can run on Windows, Linux, Unix,
                            macOS, and more. Node.js is a back-end JavaScript
                            runtime environment ...
                          </p>
                          <a
                            href="https://nodejs.org/en/"
                            target="_blank"
                            className="btn btn-primary"
                          >
                            More
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </p>
              </div>
              {/* Jumbotron */}

              {/* second */}
            </>
          </div>
        </div>
      </dv>
      {/* second */}
      <dv className="container">
        <div className="row">
          <div className="col">
            <>
              {/* Jumbotron */}
              <div
                className="bg-image p-1 text-center shadow-1-strong rounded mb-5 text-white"
                style={{
                  backgroundImage:
                    'url("https://cdn.pixabay.com/photo/2018/08/23/07/35/thunderstorm-3625405_640.jpg")',
                }}
              >
                <h1 className="mb-3 h2">Most Popular Programing Language </h1>
                <p>
                  <div className="row">
                    <div className="col-sm-3">
                      <div className="card">
                        <img
                          src={python}
                          className="card-img-top"
                          alt="Fissure in Sandstone"
                        />
                        <div className="card-body bg-dark text-white">
                          <h5 className="card-title">PYTHON </h5>
                          <p
                            className="card-text text-sm-start font-monospace "
                            style={{ height: "200px" }}
                          >
                            Python is a high-level, general-purpose programming
                            language. Its design philosophy emphasizes code
                            readability with the use of significant indentation
                            via the off-side rule.
                          </p>
                          <a
                            href="https://www.mongodb.com/what-is-mongodb"
                            target="_blank"
                            className="btn btn-primary"
                          >
                            More
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* secodn  */}

                    <div className="col-sm-3">
                      <div className="card bg-dark text-white">
                        <img
                          src={machine}
                          className="card-img-top"
                          alt="Fissure in Sandstone"
                        />
                        <div className="card-body">
                          <h5 className="card-title">MACHINE LEARNING </h5>
                          <br />
                          <p
                            className="card-text text-sm-start font-monospace "
                            style={{ height: "200px" }}
                          >
                            Machine Learning is an AI technique that teaches
                            computers to learn from experience. Machine learning
                            algorithms use computational methods to “learn”
                          </p>
                          <a
                            href="https://expressjs.com/"
                            target="_blank"
                            className="btn btn-primary"
                          >
                            More
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* third */}

                    <div className="col-sm-3 ">
                      <div className="card bg-dark text-white">
                        <img
                          src={java}
                          className="card-img-top"
                          alt="Fissure in Sandstone"
                        />
                        <div className="card-body">
                          <h5 className="card-title">JAVA </h5>
                          <p
                            className="card-text text-sm-start font-monospace"
                            style={{ height: "190px" }}
                          >
                            Java is a high-level, class-based, object-oriented
                            programming language that is designed to have as few
                            implementation dependencies
                          </p>
                          <a
                            href="https://reactjs.org/"
                            target="_blank"
                            className="btn btn-primary"
                          >
                            More
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* fourth */}

                    <div className="col-sm-3 h-90">
                      <div className="card bg-dark text-white ">
                        <img
                          src={net}
                          className="card-img-top"
                          alt="Fissure in Sandstone"
                        />
                        <div className="card-body">
                          <h5 className="card-title">.Net</h5>
                          <p
                            className="card-text text-sm-start font-monospace"
                            style={{ height: "200px" }}
                          >
                            The .NET Framework is a proprietary software
                            framework developed by Microsoft that runs primarily
                            on Microsoft Windows.
                          </p>
                          <a
                            href="https://nodejs.org/en/"
                            target="_blank"
                            className="btn btn-primary"
                          >
                            More
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </p>
              </div>
              {/* Jumbotron */}

              {/* second */}
            </>
          </div>
        </div>
      </dv>
    </>
  );
};

export default Home;
