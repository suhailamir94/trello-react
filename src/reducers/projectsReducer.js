import { CONSTANTS } from "../actions";

const initialState = {
  "project-0": {
    id: "project-0",
    boards: ["board-0"],
    title: "sample project",
  },
};

const projectsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.ADD_PROJECT: {
      // console.log("inside reducer");
      const { title, id } = action.payload;
      const newID = `project-${id}`;
      const newProject = {
        id: newID,
        title,
        boards: [],
      };

      return { ...state, [newID]: newProject };
    }

    default:
      return state;
  }
};

export default projectsReducer;
