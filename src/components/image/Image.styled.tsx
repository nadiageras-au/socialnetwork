import styled from "styled-components";

type StyledImage = {
    src: string
    width?: string
    height?: string

}

export const Image = styled.img<StyledImage>`
  src: ${(props) => props.src};
  width: ${props => props.width || '100%'};
  height: ${props => props.height || '100%'};
`