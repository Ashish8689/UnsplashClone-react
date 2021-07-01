import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import CenterFocusWeakIcon from '@material-ui/icons/CenterFocusWeak';

function Navbar() {
    return (
        <div className="navbar">
            <div className="logo-container">
                <img src="logo.png" alt="unsplash" />
            </div>

            <div className="header-input-container">
                <SearchIcon className="search"/>
                <input type="text" placeholder="Search free high-resolution photos"/>
                <CenterFocusWeakIcon className="camera"/>
            </div>

            <div className="login-container">
                <button className="login">Login</button>
                <button className="login active" >Join free</button>
            </div>
        </div>
    )
}

export default Navbar
