import React from 'react';
import {NavLink} from "react-router-dom";

export type DialogItemProps = {
    name: string
    id:number
}


export const DialogItem:React.FC<DialogItemProps> = (props) => {
    let path= "/dialogs/" +props.id
    return (
        <div>
            <NavLink to={path}>{props.name} this is test</NavLink>
        </div>
    );
};
