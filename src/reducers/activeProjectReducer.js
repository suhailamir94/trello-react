import { CONSTANTS } from "../actions";

const initialState = null;

const activeProjectReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.SET_ACTIVE_PROJECT: {
      return action.payload;
    }

    default:
      return state;
  }
};

export default activeProjectReducer;
