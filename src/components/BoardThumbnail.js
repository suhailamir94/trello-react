import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

const Thumbnail = styled.div`
  height: 280px;
  width: 280px;
  background: #fff;
  padding: 10px;
  margin: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 3px;
  box-shadow: 0 2px 4px grey;
`;

const Title = styled.h4`
  color: #111;
  text-decoration: none;
`;

const BoardThumbnail = ({ title, id, dispatch }) => {
  //  console.log (title);
  return (
    <>
      <Thumbnail>
        <Title>{title}</Title>
      </Thumbnail>
    </>
  );
};

// export default BoardThumbnail;
export default connect()(BoardThumbnail);
