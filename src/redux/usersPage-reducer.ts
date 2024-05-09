
const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

let initialState = {
    users: []
}

export const usersPageReducer = (state: any = initialState, action:any)=>{
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

export const followAC = (userId:number) => ({type: FOLLOW, userId})
export const unFollowAC = (userId:number) => ({type: UNFOLLOW,userId })
export const setUsersAC = (users:any) => ({type: SET_USERS,users })