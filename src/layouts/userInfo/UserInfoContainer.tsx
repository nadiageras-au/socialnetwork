import {addPostActionCreator, changePostValueActionCreator} from "../../redux/profilePage-reducer";
import {connect} from "react-redux";
import {MainStateType} from "../../redux/store";
import {UserInfo} from "./UserInfo";

// export type ProfileStateProps = {
//     newValueForPost: string
//     posts: Array<PostPropsType>
// }
// export type ProfileProps = {
//     // newValueForPost: string
//     // posts: Array<PostPropsType>
//     // dispatch: (action: any) => void
// }
// export const ProfileContainer = (props: ProfileProps) => {
//     const dispatch = useDispatch()
//
//     const addPost = () => {
//         // props.dispatch(addPostActionCreator{type:ADD_POST,text: props.state.newValueForPost})
//         dispatch(addPostActionCreator())
//     }
//
//     const onChangePostValueHandler = (text: string) => {
//         dispatch(changePostValueActionCreator(text))
//     }
//
//     return (
//         <StoreContext.Consumer>
//             {
//             (store)=> (
//                 <Profile updateNewPostText={onChangePostValueHandler}
//                          addPost={addPost}
//                          newValueForPost={store.getState().profilePage.newValueForPost}
//                          posts={store.getState().profilePage.posts}/>
//                 )
//
//         }
//         </StoreContext.Consumer>
//
//     );
// };

let mapStateToProps = (state:MainStateType) => {

    return {
       // profile: state.profilePage.profile,
    }
}

let mapDispatchToProps = (dispatch: any) => {

    return {
        updateNewPostText: (text: string) => {
            dispatch(changePostValueActionCreator(text))
        },
        addPost: () => {
            dispatch(addPostActionCreator())
        }
    }
}


export const UserInfoContainer = connect(mapStateToProps, mapDispatchToProps)(UserInfo)



