
const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'

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
    currentPage: 1,
    isFetching: false,
    followingInProgress: [2,3]
}
export type initialState_T = {
    users: Array<User_T>
    pageSize: number
    totalCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress:number[]

}



export const usersReducer = (state:initialState_T = initialState , action: UsersActions_T): initialState_T=>{
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
        case TOGGLE_IS_FETCHING : {
            return {
                ...state, isFetching: action.isFetching
            }
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS : {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            }
        }
        default: return state
    }

}

type UsersActions_T = ReturnType<typeof follow>
    | ReturnType<typeof unfollow>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof toggleIsFetching>
    | ReturnType<typeof toggleFollowingInProgress>

export const follow = (userId:number) => ({type: FOLLOW, userId} as const)
export const unfollow = (userId:number) => ({type: UNFOLLOW, userId } as const)
export const setUsers = (users:Array<User_T>) => ({type: SET_USERS,users } as const)
export const setCurrentPage = (currentPageNumber:number) => ({type: SET_CURRENT_PAGE,currentPageNumber } as const)
export const setTotalUsersCount = (totalCount:number) => ({type: SET_TOTAL_COUNT,totalCount} as const)
export const toggleIsFetching = (isFetching:boolean) => ({type: TOGGLE_IS_FETCHING,isFetching} as const)
export const toggleFollowingInProgress = (isFetching: boolean, userId: number) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS,isFetching,userId} as const)