import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from "./Components/Navigation";
import {Route, Switch} from "react-router-dom";
import Home from "./Components/Home";
import BrandList from "./Components/BrandList";
import ChocolateList from "./Components/ChocolateList";
import BrandDetail from "./Components/BrandDetail";

class App extends Component {
    render() {
        return (
            <div className="container">
                <Navigation/>
                <Switch>
                    <Route path="/home" component={Home}/>
                    <Route exact path="/brands" component={BrandList}/>
                    <Route path="/brands/:bid" component={BrandDetail}/>
                    <Route path="/chocolates" component={ChocolateList}/>
                </Switch>
            </div>
        );
    }
}

export default App;
