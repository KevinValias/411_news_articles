import { combineReducers } from 'redux'

const articles = (state = [], action) => {
    switch(action.type) {
        case "FETCH_ARTICLES":
            return action.value
        // add case "FETCH_ARTICLES"
        default:
            return state
    }
}

export default combineReducers({ articles })