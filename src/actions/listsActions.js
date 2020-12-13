import { CONSTANTS } from "../actions";
import uuid from "uuidv4";

export const addList = title => {
  return (dispatch, getState) => {
    const projectID = getState().activeProject;
    const boardID = getState().activeBoard;
    const id = uuid();
    dispatch({
      type: CONSTANTS.ADD_LIST,
      payload: { title, projectID, boardID, id },
    });
  };
};

export const sort = (
  droppableIdStart,
  droppableIdEnd,
  droppableIndexStart,
  droppableIndexEnd,
  draggableId,
  type
) => {
  return (dispatch, getState) => {
    const projectID = getState().activeProject;
    const boardID = getState().activeBoard;
    dispatch({
      type: CONSTANTS.DRAG_HAPPENED,
      payload: {
        droppableIdStart,
        droppableIdEnd,
        droppableIndexEnd,
        droppableIndexStart,
        draggableId,
        type,
        projectID,
        boardID,
      },
    });
  };
};

export const editTitle = (listID, newTitle) => {
  return {
    type: CONSTANTS.EDIT_LIST_TITLE,
    payload: {
      listID,
      newTitle,
    },
  };
};

export const deleteList = listID => {
  return (dispatch, getState) => {
    const projectID = getState().activeProject;
    const boardID = getState().activeBoard;
    return dispatch({
      type: CONSTANTS.DELETE_LIST,
      payload: {
        listID,
        projectID,
        boardID,
      },
    });
  };
};
