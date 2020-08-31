import axios from "axios";

//EXPORT ACTIONS FOR FETCHING SMURF INFORMATION
export const FETCHING_SMURF_START = "FETCH_SMURF START";
export const FETCHING_SMURF_SUCCESS = "FETCH_SMURF_SUCCESS";
export const FETCHING_SMURF_ERROR = "FETCH_DATA_ERROR";

//EXPORT ACTIONS FOR ADDING SMURF DATA
export const NEW_SMURF_START = "NEW_SMURF_START";
export const NEW_SMURF_SUCCESS = "NEW_SMURF_SUCCES";
export const NEW_SMURF_ERROR = "NEW_SMURF_ERROR";

//export getSmurf component to dispatch actions of pulling data from api and show if success or fail
export const getSmurf = () => (dispatch) => {
  console.log("This is the getSmurf info");
  dispatch({ type: "FETCHING_SMURF_START" });
  axios
    .get("http://localhost:3333/smurfs")
    .then((res) => {
      dispatch({ type: FETCHING_SMURF_SUCCESS, payload: res.data });
      console.log("The Response for Smurf Data is :", res);
    })
    .catch((err) => {
      dispatch({
        type: FETCHING_SMURF_ERROR,
        payload: ` ${err.response.status} ${err.response.data}`,
      });
      console.log("The Error is :", err);
    });
};

//export newSmurf component to dispatch actions for adding new smurf with success or if failed
export const postNewSmurf = (smurf) => (dispatch) => {
    console.log("This is the postNewSmurf info");
    dispatch({ type: "NEW_SMURF_START" });
    axios
      .post("http://localhost:3333/smurfs", smurf)
      .then((res) => {
        dispatch({ type: NEW_SMURF_SUCCESS, payload: res.data });
        console.log("The Response for Smurf Data Added is:", res);
      })
      .catch((err) => {
        dispatch({
          type: NEW_SMURF_ERROR,
          payload: ` ${err.response.status} ${err.response.data}`,
        });
        console.log("The Error is:", err);
      });
  };
