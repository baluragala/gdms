import {CHANGE_USERNAME, GET_REPOS, LOAD_REPOS} from "../actionTypes/index";

export function getRepos() {
    return {
        type: GET_REPOS
    }
}

export function loadRepos(username, repos) {
    return {
        type: LOAD_REPOS,
        username,
        repos
    }
}

export function changeUsername(username) {
    return {
        type: CHANGE_USERNAME,
        username
    }
}