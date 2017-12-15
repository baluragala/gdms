import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from "react-redux";
import {changeUsername, getRepos} from "./actions/index";

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <br></br>
                <label>Github username : </label>
                <input type="text"
                       value={this.props.username}
                       onChange={this.props.changeUsername}
                />
                <button onClick={this.props.fetchRepos}>Fetch</button>

                {this.props.isFetching && <p>Please wait...</p>}
                {this.props.repos ? this.props.repos.map((repo) => <li>{repo.name}</li>) : ""}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        username: state.username,
        repos: state.repos,
        isFetching: state.isFetching
    }
}

function mapDispatchToProps(dispatch) {
    return {
        changeUsername: (evt) => dispatch(changeUsername(evt.target.value)),
        fetchRepos: (evt) => dispatch(getRepos())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
