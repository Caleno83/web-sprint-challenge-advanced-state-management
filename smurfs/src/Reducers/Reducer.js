//import actions
import {
  FETCHING_SMURF_START,
  FETCHING_SMURF_SUCCESS,
  FETCHING_SMURF_ERROR,
} from "../Actions/Actions";

//set intialState reducer
const initialState = {
  smurfs: [],
  isFetching: false,
  error: "",
};

export const Reducer = (state = initialState, action) => {
  console.log("This is the reducer", action);
  switch (action.type) {
    //Here we created this case to start API fetch
    case FETCHING_SMURF_START:
      return state;
    // Here this case is created to see if isFetching is successful
    case FETCHING_SMURF_SUCCESS:
      return state;
    //Here this case is created to see if an API is not successful
    case FETCHING_SMURF_ERROR:
      return state;
    default:
      return state;
  }
};
