import axios from "axios";

//EXPORT ACTIONS FOR FETCHING SMURF INFORMATION
export const FETCHING_SMURF_START = "FETCH_SMURF START";
export const FETCHING_SMURF_SUCCESS = "FETCH_SMURF_SUCCESS";
export const FETCHING_SMURF_ERROR = "FETCH_DATA_ERROR";

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
