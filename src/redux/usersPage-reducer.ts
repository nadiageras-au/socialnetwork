
const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

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
    users: []
}
export type initialState_T = {
    users: Array<User_T>
}



export const usersPageReducer = (state:initialState_T = initialState , action: UsersActions_T): initialState_T=>{
    switch (action.type) {
        case FOLLOW : {
            return {...state,
            users: state.users.map((u:any)=> {
                if (u.id === action.userId) {
                    return {...u, followed: true}
                }return u
            }
            )}
        }
        case UNFOLLOW : {
            return {...state,
                users: state.users.map((u:any)=> {
                        if (u.id === action.userId) {
                            return {...u, followed: false}
                        }return u
                    }
                )}
        }
        case SET_USERS : {
            return {
                ...state, users: [...state.users, ...action.users]
            }
        }
        default: return state
    }

}

type UsersActions_T = ReturnType<typeof followAC> | ReturnType<typeof unFollowAC> | ReturnType<typeof setUsersAC>

export const followAC = (userId:number) => ({type: FOLLOW, userId} as const)
export const unFollowAC = (userId:number) => ({type: UNFOLLOW, userId } as const)
export const setUsersAC = (users:Array<User_T>) => ({type: SET_USERS,users } as const)