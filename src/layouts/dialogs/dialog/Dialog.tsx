import React from 'react';
import {NavLink} from "react-router-dom";

type DialogItemProps = {
    name: string
    id:string
}
export const DialogItem:React.FC<DialogItemProps> = (props) => {
    let path= "/dialogs/" +props.id
    return (
        <div>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
};
