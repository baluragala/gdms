import React from 'react'
import './Navigation.css'
import Search from "./Search";
import Status from "./Status";
import {Link, NavLink} from "react-router-dom";



const Navigation = (props) => {
    return (
        <nav className="navbar navbar-toggleable-md navbar-inverse fixed-top bg-inverse">
            <Link className="navbar-brand" to="/home">Chocolate Collection</Link>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/home" activeClassName="active">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/brands" activeClassName="active">Brands</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/chocolates" activeClassName="active">Chocolates</NavLink>
                    </li>
                </ul>
                <Status isLoggedIn={true} firstName={props.firstName} lastName={props.lastName}/>
                <Search/>
            </div>
        </nav>
    )
};

export default Navigation;