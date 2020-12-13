import { combineReducers } from "redux";
import listsReducer from "./listsReducer";
import cardsReducer from "./cardsReducer";
import boardsReducer from "./boardsReducer";
import boardOrderReducer from "./boardOrderReducer";
import activeBoardReducer from "./activeBoardReducer";
import projectsReducer from "./projectsReducer";
import projectOrderReducer from "./projectOrderReducer";
import activeProjectReducer from "./activeProjectReducer";

export default combineReducers({
  lists: listsReducer,
  cards: cardsReducer,
  projects: projectsReducer,
  projectOrder: projectOrderReducer,
  activeProject: activeProjectReducer,
  boards: boardsReducer,
  boardOrder: boardOrderReducer,
  activeBoard: activeBoardReducer,
});
