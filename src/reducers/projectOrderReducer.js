import { CONSTANTS } from "../actions";

const initialState = ["project-0"];

const projectOrderReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.ADD_PROJECT: {
      return [...state, `project-${action.payload.id}`];
    }
    default:
      return state;
  }
};

export default projectOrderReducer;
