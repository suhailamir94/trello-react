import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addBoard, setActiveProject } from "../actions";
import BoardThumbnail from "./BoardThumbnail";
import Icon from "@material-ui/core/Icon";

import { deleteBoard } from "../actions";

const DeleteButton = styled(Icon)`
  top: 90%;
  opacity: 0.5;
  margin-left: 45%;
`;

const Thumbnails = styled.div`
  flex: 1;
  height: 50%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  &:hover {
    cursor: pointer;
  }
`;

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
`;

const CreateTitle = styled.h3`
  font-size: 48px;
  color: white;
  font-weight: bold;
  font-family: Helvetica, Arial, sans-serif;
`;

const CreateInput = styled.input`
  width: 400px;
  height: 80px;
  font-size: 22px;
  padding: 10px;
  box-sizing: border-box;
  border-radius: 3px;
  border: none;
  outline-color: blue;
  box-shadow: 0 2px 4px grey;
  align-self: center;
`;

const BoardDashboard = ({
  boards,
  boardOrder,
  dispatch,
  match,
  activeProject,
}) => {
  // this is the home site that shows you your boards and you can also create a Board here.

  const [newBoardTitle, setNewBoardTitle] = useState("");

  const handleChange = e => {
    setNewBoardTitle(e.target.value);
  };

  useEffect(() => {
    const { projectID } = match.params;

    dispatch(setActiveProject(projectID));
  }, []);
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addBoard(newBoardTitle, match.params.projectID));
  };

  const renderBoards = () => {
    const projectBoards = {};

    for (var key in boards) {
      // skip loop if the property is from prototype
      if (!boards.hasOwnProperty(key)) continue;

      var obj = boards[key];
      for (var prop in obj) {
        // skip loop if the property is from prototype
        if (!obj.hasOwnProperty(prop)) continue;
        // your code
        if (
          obj["project"] === match.params.projectID &&
          obj["title"].length > 0
        ) {
          projectBoards[key] = { ...obj };
        }
      }
    }

    console.log("projectBoards", boards);
    return Object.keys(projectBoards).length === 0 &&
      projectBoards.constructor === Object ? (
      <h2 style={{ color: "red", marginTop: "50px" }}>No Boards Added</h2>
    ) : (
      boardOrder.map(boardID => {
        const board = projectBoards[boardID];

        return (
          <div key={boardID}>
            <Link
              to={`/project/${match.params.projectID}/board/${boardID}`}
              style={{ textDecoration: "none" }}
            >
              <BoardThumbnail {...board} />
            </Link>

            <DeleteButton
              fontSize="large"
              onClick={() => {
                dispatch(deleteBoard(boardID));
              }}
            >
              delete
            </DeleteButton>
          </div>
        );
      })
    );
  };

  const renderCreateBoard = () => {
    return (
      <form onSubmit={handleSubmit} style={{ textAlign: "center" }}>
        <CreateTitle>Create a new Board</CreateTitle>
        <CreateInput
          onChange={handleChange}
          value={newBoardTitle}
          placeholder="Your boards title..."
          type="text"
        />
      </form>
    );
  };

  return (
    <>
      <Link to="/">Go Back</Link>
      <HomeContainer>
        {renderCreateBoard()}
        <Thumbnails>{renderBoards()}</Thumbnails>
      </HomeContainer>
    </>
  );
};

const mapStateToProps = state => ({
  boards: state.boards,
  boardOrder: state.boardOrder,
  activeProject: state.activeProject,
});

export default connect(mapStateToProps)(BoardDashboard);
