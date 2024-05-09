
const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT'

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
    users: [],
    pageSize: 99,
    totalCount: 0,
    currentPage: 1
}
export type initialState_T = {
    users: Array<User_T>
    pageSize: number
    totalCount: number
    currentPage: number
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
                ...state, users: action.users
            }
        }
        case SET_CURRENT_PAGE : {
            return {
                ...state, currentPage: action.currentPageNumber
            }
        }
        case SET_TOTAL_COUNT : {
            return {
                ...state, totalCount: action.totalCount
            }
        }
        default: return state
    }

}

type UsersActions_T = ReturnType<typeof followAC>
    | ReturnType<typeof unFollowAC>
    | ReturnType<typeof setUsersAC>
    | ReturnType<typeof setCurrentPageAC>
    | ReturnType<typeof setTotalUsersCountAC>

export const followAC = (userId:number) => ({type: FOLLOW, userId} as const)
export const unFollowAC = (userId:number) => ({type: UNFOLLOW, userId } as const)
export const setUsersAC = (users:Array<User_T>) => ({type: SET_USERS,users } as const)
export const setCurrentPageAC = (currentPageNumber:number) => ({type: SET_CURRENT_PAGE,currentPageNumber } as const)
export const setTotalUsersCountAC = (totalCount:number) => ({type: SET_TOTAL_COUNT,totalCount} as const)