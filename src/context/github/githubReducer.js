
import {
    SEARCH_USERS, SET_LOADING, GET_USER, CLEAR_USERS, GET_REPOS
} from '../types'

export default (state, action) => {
    switch(action.type) {
        case SEARCH_USERS:
            return {
                ...state,
                users: action.payload,
                isLoading: false
            }
            case CLEAR_USERS:
                return {
                    ...state,
                    users: [],
                    isLoading: false
                }
                case GET_REPOS: 
                return {
                    ...state,
                    repos: action.payload,
                    isLoading: false
                }
                case GET_USER :
                    return {
                        ...state,
                        user: action.payload,
                        isLoading: false
                    }
                case SET_LOADING:
                    return {
                        ...state,
                        isLoading: true
                    }
        default: 
        return state
    }
}