import React, { useState } from "react";
import { postNewSmurf } from "../Actions/Actions";
import { connect } from "react-redux";

//create SmurfForm component to create state for smurfs
const SmurfForm = ({ postNewSmurf }) => {
  const newSmurt = {
    name: "",
    age: "",
    height: "",
    id: "",
  };

  const [smurf, setSmurf] = useState(newSmurt);

  //create handle change to setSmurf state using an event
  const handleChange = (e) => {
    setSmurf({
      ...smurf,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postNewSmurf(smurf);
    setSmurf({
      name: "",
      age: "",
      height: "",
      id: "",
      url: "",
    });
  };

  return (
    <>
      <h1>Please Add Smurf Members To Increase Our Village Family</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              onChange={handleChange}
              name="name"
              placeholder="Enter Name"
              value={smurf.name}
            />

            <input
              type="text"
              onChange={handleChange}
              name="age"
              placeholder="Enter Age"
              value={smurf.age}
            />

            <input
              type="text"
              onChange={handleChange}
              name="height"
              placeholder="Enter Height"
              value={smurf.height}
            />

            <button type="submit">Add Smurf</button>
          </div>
        </form>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs,
  };
};

const mapDispatchToProps = { postNewSmurf };

export default connect(mapStateToProps, mapDispatchToProps)(SmurfForm);
