import { CONSTANTS } from "../actions";

const initialState = ["board-0"];

const boardOrderReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.ADD_BOARD: {
      return [...state, `board-${action.payload.id}`];
    }
    case CONSTANTS.DELETE_BOARD: {
      return state.filter(e => e !== action.payload.boardId);
    }
    default:
      return state;
  }
};

export default boardOrderReducer;
