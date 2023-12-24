import React from 'react';
import styled from "styled-components";

export const Post = () => {
    return (
        <StyledPost>
            <h3>I am a Post</h3>
        </StyledPost>
    );
};

const StyledPost = styled.article`
  display: block;
  height: 100px;
  width: 450px;
  background-color: #faff89;
  border: 2px solid #b26f4a;
  margin-bottom: 25px;
`