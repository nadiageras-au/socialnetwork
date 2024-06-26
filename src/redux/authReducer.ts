const SET_USER_DATA = 'SET_USER_DATA'

export type User_T = {
    followed: boolean
    id: number
    name: string
    photos: {
        small: string
        large: string
    }
    status: string
    uniqueUrlName: string
}
const initialState: initialState_T = {
    id: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false
}

type initialState_T = {
    id: number | null
    email: string | null
    login: string | null
    isFetching: boolean
    isAuth: boolean
}


export const authReducer = (state: initialState_T = initialState, action: authReducerActionsType): initialState_T => {
    switch (action.type) {
        case SET_USER_DATA : {
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        }

        default:
            return state
    }

}


type authReducerActionsType = ReturnType<typeof setAuthUserData>
export const setAuthUserData = (userId: number, email: string, login: string) => (
    {type: SET_USER_DATA, data: {userId,email, login} }as const)
