import { CONSTANTS } from "../actions";
import uuid from "uuidv4";

export const setActiveProject = id => {
  return {
    type: CONSTANTS.SET_ACTIVE_PROJECT,
    payload: id,
  };
};

export const addProject = title => {
  // console.log("here", CONSTANTS.ADD_PROJECT, title);
  const id = uuid();
  return {
    type: CONSTANTS.ADD_PROJECT,
    payload: { title, id },
  };
};
