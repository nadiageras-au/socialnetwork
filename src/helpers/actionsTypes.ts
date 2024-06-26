export const ADD_POST = 'ADD_POST'
export const ON_CHANGE_POST_VALUE = 'ON_CHANGE_POST_VALUE'
export const ADD_MESSAGE = 'ADD_MESSAGE'
export const ON_CHANGE_MESSAGE_VALUE = 'ON_CHANGE_MESSAGE_VALUE'
export const SET_USER_PROFILE = 'SET_USER_PROFILE'

type T_AddPostAction = {
    type: typeof ADD_POST
}

type T_OnChangePostValueAction = {
    type: typeof ON_CHANGE_POST_VALUE
    newText: string
}

type T_AddMessageAction = {
    type: typeof ADD_MESSAGE
    message: string
}

type T_OnChangeMessageValueAction = {
    type: typeof ON_CHANGE_MESSAGE_VALUE
    msgValue: string
}

type T_SetUserPageAC = {
    type: typeof SET_USER_PROFILE,
    profile: any
}

export type ActionsType = T_AddPostAction
    | T_OnChangePostValueAction
    | T_AddMessageAction
    | T_OnChangeMessageValueAction
    | T_SetUserPageAC
