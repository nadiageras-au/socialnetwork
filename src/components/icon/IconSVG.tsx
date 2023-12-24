import React from 'react';
import imgsrc from "../../assets/images/icons/iconsSprite.svg"
import styled from "styled-components";

type IconPropsType = {
    iconId?: string
    width?: string
    height?: string
    fill?: string
}
export const Icon = (props: IconPropsType) => {
    return (
        <WrapIcon>
            <svg width={props.width || "50"} height={props.height || "50"}>
                <use xlinkHref={`${imgsrc}#${props.iconId}`}/>
            </svg>
        </WrapIcon>

    )
        ;
}

const WrapIcon  = styled.div`
display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`
