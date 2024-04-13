import React, {useRef} from 'react';
import styled from "styled-components";
import {AvatarImg, DialogItem, DialogItemProps} from "./dialog/Dialog";
import {Message, MessageProps} from "./message/Message";
// import {DialogsPageStateProps} from "../../App";
//заглушка
import darth from "./../../assets/images/avatars/darth_vader_icon.png";
import {FlexWrapper} from "../../components/wrappers/FlexWrapper";


// export type DialogsPageStateProps = {
//     dialogs:Array<DialogItemProps>
//     messages: Array<MessageProps>
// }
export type DialogsStateProps = {
    dialogs: Array<DialogItemProps>
    messages: Array<MessageProps>
}
export type DialogsProps = {
    state:DialogsStateProps
}
export const Dialogs = ({state}:DialogsProps) => {

    // let dialogsData = [
    //     {id:1, name: 'Chewbacca'},
    //     {id:2, name: 'R2d2'},
    //     {id:3, name: 'Luke'},
    //     {id:4, name: 'Leia'},
    //     {id:5, name: 'Jedi'},
    // ]
    //
    // let messsagesData = [
    //     {id:1, message: 'Hi!'},
    //     {id:2, message: 'How are you, bro?!'},
    //     {id:3, message: 'Yooo!'},
    //     {id:4, message: 'Cool!'},
    //
    // ]


    let newPostElement = useRef<HTMLTextAreaElement>(null);
    const addPost = () => {
        debugger;
        if (newPostElement.current !== null) {
            alert(newPostElement.current.value)
            // alert(newPostElement.current.resizableTextArea.textArea.value)
        }
    }

    return (
        <StyledDialogs>
            <DialogsList>
                {

                    state.dialogs.map(el=> {
                        return <DialogItem name={el.name} id={el.id} key={el.id} avatar={el.avatar}/>

                    })
                }



            </DialogsList>
            <FlexWrapperDialogs>
                <Messages>
                    {
                        state.messages.map(msg => {

                            return <>
                                {/*<AvatarImg src={state.dialogs.filter((el) => {*/}
                                {/*    el.id === msg.id ? el.avatar : darth*/}
                                {/*})} height='50px' width='50px'/>*/}

                                <AvatarImg src={darth} height='50px' width='50px'/>
                                <Message message={msg.message} key={msg.id} id={msg.id}/>


                            </>
                        })
                    }

                </Messages>

                <textarea ref={newPostElement}></textarea>
                <button onClick={addPost}>Add</button>
            </FlexWrapperDialogs>

        </StyledDialogs>
    );
};

const StyledDialogs = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const DialogsList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 15px;
  width: 25%;
  max-width: 250px;
  background-color: #f9fdb3;
`

const Dialog = styled.div`
  font-size: 20px;
  color: cornflowerblue;
  border: 1px solid forestgreen;
  background-color: #fffdf1;
`

const Messages = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 30px;
  background-color: #f9e0ff;
  width: 70%;
`
export const FlexWrapperDialogs = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 20px;
  align-items: center;
  padding: 20px;
  width: 100%;
`

