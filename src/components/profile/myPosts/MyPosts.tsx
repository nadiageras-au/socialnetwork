import React from 'react';
import styled from "styled-components";
import {Post} from "./post/Post";

export const MyPosts = () => {
    return (
        <StyledPosts>
<div>
    <textarea></textarea>
    <button>Add Post</button>
</div>
                <h2>My posts</h2>
                <Post/>
                <Post/>
                <Post/>

        </StyledPosts>
    );
};

const StyledPosts = styled.div`
  //grid-area: h;
  background-color: #c9c9a6;
`