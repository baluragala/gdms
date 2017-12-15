import {CHANGE_USERNAME, GET_REPOS, LOAD_REPOS} from "../actionTypes/index";

export default (prevState = {isFetching: false}, action) => {
    console.log(prevState, action);
    switch (action.type) {
        case GET_REPOS:
            return Object.assign({}, prevState, {isFetching: true});
        case LOAD_REPOS:
            return Object.assign({}, prevState, {
                isFetching: false,
                username: action.username,
                repos: action.repos
            });
        case CHANGE_USERNAME:
            return Object.assign({}, prevState, {username: action.username});
        default:
            return prevState;
    }
}