import React from 'react';
import {Image} from '../image/Image.styled'
import styled from "styled-components";
//import imgSrc from "../../assets/images/logo.svg";


type LogoType = {
    src: string
}

export const Logo = (props: LogoType) => {
    // @ts-ignore
    return (
        <a href="#">
            <Image src={props.src}/>
        </a>

    )

};

// export const Logo = (props: LogoType) => {
//     return (
//         <a href="#">
//             <StyledLogo src={props.src}/>
//         </a>
//     )
// };
//
// const StyledLogo = styled.img`
//   width: 100px;
//   height: 50px;
// `
