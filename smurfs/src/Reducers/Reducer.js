//import actions
import {
  FETCHING_SMURF_START,
  FETCHING_SMURF_SUCCESS,
  FETCHING_SMURF_ERROR,
  NEW_SMURF_START,
  NEW_SMURF_SUCCESS,
  NEW_SMURF_ERROR,
} from "../Actions/Actions";

//set initialState reducer
const initialState = {
  smurfs: [],
  isFetching: false,
  error: "",
};

export const Reducer = (state = initialState, action) => {
  console.log("This is the reducer", action);
  switch (action.type) {
    //Here we created this case to start API fetch.
    case FETCHING_SMURF_START:
      return { ...state, isFetching: true, error: "" };
    // Here this case is created to see if isFetching is successful.
    case FETCHING_SMURF_SUCCESS:
      return { ...state, smurfs: action.payload, isFetching: false, error: "" };
    //Here this case is created to see if an API is not successful
    case FETCHING_SMURF_ERROR:
      return { ...state, isFetching: false, error: action.payload };
    //This is a case is when fetching an added new smurf.
    case NEW_SMURF_START:
      return { ...state, isFetching: true, error: "" };
    //case created for when adding new smurf is successful.
    case NEW_SMURF_SUCCESS:
      return { ...state, smurfs: action.payload, isFetching: false, error: "" };
    //case created for if adding smurfs fails.
    case NEW_SMURF_ERROR:
      return { ...state, isFetching: false, error: action.payload };
    default:
      return state;
  }
};
