import {select, call, put, takeLatest} from "redux-saga/effects";
import {loadRepos} from "../actions/index";
import {GET_REPOS} from "../actionTypes/index";


export function* getRepos() {
    const username = yield select((state) => state.username);
    const url = `https://api.github.com/users/${username}/repos?type=all&sort=updated`;
    const repos = yield call(() => fetch(url).then(r => r.json()));
    yield put(loadRepos(username, repos))
}

export function* getReposWatcher() {
    yield takeLatest(GET_REPOS, getRepos)
}

