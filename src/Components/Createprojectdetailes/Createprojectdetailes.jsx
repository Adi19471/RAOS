import React, { useState } from "react";



const Createprojectdetailes = () => {
  const [data, setData] = useState({
    title: "",
    langugae: "",
    duration: "",
    experience: "",
    hires: "",
    description: "",
    status: "",
    openingdates: "",
    enddates: "",
    pnumber: "",
    email: "",
    name:"",
  });

  const {
    title,
    langugae,
    duration,
    experience,
    hires,
    description,
    status,
    openingdates,
    enddates,
    pnumber,
    email,
    name,
  } = data;

  const handlerChainge = (e) => {
    setData({...data,[e.target.name]:e.target.value})
  };


const PostData = async(e) =>{
    e.preventDefault();
console.log(data)


}

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <h2 className="text-center text-info">PROJECT ENTRY DETAILES </h2>

            <form>
              <div className="form-group">
                <label htmlFor="projecttitle">PROJECT TITLE</label>
                <input
                  type="text"
                  name="title"
                  value={title}
                  onChange={handlerChainge}
                  className="form-control"
                  id="projecttitle"
                  placeholder="online crime system"
                />
              </div>

              <div className="form-group">
                <label htmlFor="programelanaguage">PROJECT LANGUGAE</label>
                <input
                  type="text"
                  name="langugae"
                  value={langugae}
                  onChange={handlerChainge}
                  className="form-control"
                  id="programelanaguage"
                  placeholder="python,java,.net,c,c++"
                />
              </div>

              <div className="form-group">
                <label htmlFor="projectduration">PROJECT DURATION</label>
                <input
                  type="text"
                  name="duration"
                  value={duration}
                  onChange={handlerChainge}
                  className="form-control"
                  id="projectduration"
                  placeholder="2months,3months"
                />
              </div>

              <div className="form-group">
                <label htmlFor="projectduration">CLIENT EMAIL</label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={handlerChainge}
                  className="form-control"
                  id="projectduration"
                  placeholder="2months,3months"
                />
              </div>

              <div className="form-group">
                <label htmlFor="projectduration">CLIENT PHONE NUMBER</label>
                <input
                  type="number"
                  name="pnumber"
                  value={pnumber}
                  onChange={handlerChainge}
                  className="form-control"
                  id="projectduration"
                  placeholder="2months,3months"
                />
              </div>

              <div className="form-group">
                <label htmlFor="experiencelevel">EXPERIENCE LEVEL</label>
                <input
                  type="text"
                  name="experience"
                  value={experience}
                  onChange={handlerChainge}
                  className="form-control"
                  id="experiencelevel"
                  placeholder="beginer,entry,advanced"
                />
              </div>

              <div className="form-group">
                <label htmlFor="noofhires">NO OF HIRES </label>
                <input
                  type="number"
                  name="hires"
                  value={hires}
                  onChange={handlerChainge}
                  className="form-control"
                  id="noofhires"
                  placeholder="1,2,3,4,5,6"
                />
              </div>

              <div className="form-group">
                <label htmlFor="projectdescription">PROJECT DESCRIPTION</label>
                <textarea
                  name="description"
                  value={description}
                  onChange={handlerChainge}
                  className="form-control"
                  id="projectdescription"
                  rows={3}
                  defaultValue={""}
                />
              </div>

              <div className="form-group">
                <label htmlFor="status">PROJECT STATUS </label>
                <input
                  type="text"
                  name="status"
                  value={status}
                  onChange={handlerChainge}
                  className="form-control"
                  id="status"
                  placeholder="OPEN   CLOSE   PROGRESS"
                />
              </div>

              <div className="form-group">
                <label htmlFor="status">PROJECT OPENING DATES </label>
                <input
                  type="date"
                  name="openingdates"
                  value={openingdates}
                  onChange={handlerChainge}
                  className="form-control"
                  id="status"
                  placeholder="OPEN DATES"
                />
              </div>

              <div className="form-group">
                <label htmlFor="status">PROJECT ENDING DATES </label>
                <input
                  type="date"
                  name="enddates"
                  value={enddates}
                  onChange={handlerChainge}
                  className="form-control"
                  id="status"
                  placeholder="END DATES"
                />
              </div>


              <div className="form-group">
                <label htmlFor="name">PROJECT OWNER </label>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={handlerChainge}
                  className="form-control"
                  id="name"
                  placeholder="Anil"
                />
              </div>


              <div className="form-group">
                <input  onClick={PostData}   type="submit" className="btn btn-info" value="submit" />
                <input
                  type="reset"
                  className="btn btn-warning"
                  value="cancel"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Createprojectdetailes;
