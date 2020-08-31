import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getSmurf } from '../Actions/Actions';
import Smurf from "./Smurf";
import styled from "styled-components";

const SmurfDiv = styled.div`
margin-left: 12px;
color: blue;
`

const SmurfList = ({ getSmurf, isFetching, error, smurfs }) => {

    //useEffect hook to fetch smurfs action
    useEffect(() => {
        getSmurf();
       }, [getSmurf]);

  return (
    <SmurfDiv>
      {isFetching ? (
        <h3>Hold tight, we're fetching your Smurf Data...</h3>
      ) : (
        <div>
          {smurfs.map((smurf) => {
            return <Smurf key={smurf.id} smurf={smurf} />;
          })}
        </div>
      )}
      {error !== "" ? <h4 className="error">{error}</h4> : null}
    </SmurfDiv>
  );
};

const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs,
    isFetching: state.isFetching,
    error: state.error,
  };
};

const mapDispatchToProps = { getSmurf };

export default connect(mapStateToProps, mapDispatchToProps)(SmurfList);
