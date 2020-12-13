import { CONSTANTS } from "../actions";
import uuid from "uuidv4";

export const setActiveBoard = id => {
  return {
    type: CONSTANTS.SET_ACTIVE_BOARD,
    payload: id,
  };
};

export const addBoard = (title, project) => {
  const id = uuid();
  return {
    type: CONSTANTS.ADD_BOARD,
    payload: { title, id, project },
  };
};

export const deleteBoard = boardId => {
  return {
    type: CONSTANTS.DELETE_BOARD,
    payload: { boardId },
  };
};
