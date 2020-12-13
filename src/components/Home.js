import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addProject } from "../actions";
import BoardThumbnail from "./BoardThumbnail";

const Thumbnails = styled.div`
  flex: 1;
  height: 50%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
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

const Home = ({ projects, projectOrder, dispatch }) => {
  // this is the home site that shows your projects and you can also create a Project here.

  const [newProjectTitle, setNewProjectTitle] = useState("");

  const handleChange = e => {
    setNewProjectTitle(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addProject(newProjectTitle));
  };

  const renderBoards = () => {
    return projectOrder.map(projectID => {
      const project = projects[projectID];

      return (
        <Link
          key={projectID}
          to={`/project/${project.id}`}
          style={{ textDecoration: "none" }}
        >
          <BoardThumbnail {...project} />
        </Link>
      );
    });
  };

  const renderCreateBoard = () => {
    return (
      <form onSubmit={handleSubmit} style={{ textAlign: "center" }}>
        <CreateTitle>Create a new Project</CreateTitle>
        <CreateInput
          onChange={handleChange}
          value={newProjectTitle}
          placeholder="Your projects title..."
          type="text"
        />
      </form>
    );
  };

  return (
    <HomeContainer>
      {renderCreateBoard()}
      <Thumbnails>{renderBoards()}</Thumbnails>
    </HomeContainer>
  );
};

const mapStateToProps = state => ({
  projects: state.projects,
  projectOrder: state.projectOrder,
});

export default connect(mapStateToProps)(Home);
