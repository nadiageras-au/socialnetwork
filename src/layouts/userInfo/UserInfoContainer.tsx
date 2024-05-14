import {addPostActionCreator, changePostValueActionCreator, T_ProfileInfo} from "../../redux/profileReducer";
import {connect} from "react-redux";
import {UserInfo} from "./UserInfo";


let mapStateToProps = (state: any) => {

    return {
        profile: state.profilePage.profile,
    }
}

let mapDispatchToProps = () => {

}

export const UserInfoContainer = connect(mapStateToProps, mapDispatchToProps)(UserInfo)



