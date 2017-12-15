import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {incrementAction, decrementAction} from './actions'
import {connect} from "react-redux";

class App extends Component {
    render() {
        return (
            <div className="App">
                <button onClick={this.props.incAction}>INC</button>
                <label>{this.props.counter}</label>
                <button onClick={this.props.decAction}>DEC</button>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        counter: state.counter
    }
}

function mapDispatchToProps(dispatch) {
    return {
        incAction: () => dispatch(incrementAction),
        decAction: () => dispatch(decrementAction),
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(App);
