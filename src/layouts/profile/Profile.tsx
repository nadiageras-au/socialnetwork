import React from 'react';
import {ProfileTabPanel} from "./ProfileTabPanel/profileTabPanel";
import {ProfileContentContainer} from "./ProfileContent/ProfileContentContainer";
import {addPostActionCreator, changePostValueActionCreator} from "../../redux/profileReducer";

export const Profile = (props: any) => {

    return (
        <div>
            {!!props.profile &&
                <ProfileTabPanel profile={props.profile}
                                 newValuePost={props.newValueForPost}
                                 onChangeHandler={props.changePostValueActionCreator}
                                 onAddPostHandler={props.addPostActionCreator}/>
            }
            <ProfileContentContainer/> {/* Content - Posts, Photos & etc*/}

        </div>
    );
};

