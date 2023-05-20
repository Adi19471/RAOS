import React from "react";

const Projects = () => {
  return (
    <>
    <div className="container">
        <div className="row">
            <h4>List of Projects Infoamtion 2022-2023 </h4>
 
      <div className="card">
        <h5 className="card-header">Programator PHP</h5>
        <div className="card-body">
          <h5 className="card-title">
            Program status <button className="btn btn-warning">close</button>
          </h5>
          <p className="card-text">
            Allows hotel guests to schedule the dates of their stay, choose
            rooms at the time of booking, and take payment from them
          </p>
          <a href="#">
            Programator PHP What skills are needed? <b>Programator în PHP</b>
          </a>{" "}
          <br />
          <a href="#">
            What skills are needed? <b>Programator în PHP.</b>
          </a>
          <br />
          <a href="#">
            <b> Duration:3 Months</b>
          </a>
          <br />
          <a href="#">
            Experience level <b>entry</b>
          </a>
          <br />
          <a href="#">
            Number of Hires: <b>1</b>
          </a>
          <br />
        </div>
      </div>       </div>
    </div>
    </>
  );
};

export default Projects;
