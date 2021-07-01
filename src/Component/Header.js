import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import CenterFocusWeakIcon from '@material-ui/icons/CenterFocusWeak';

function Header() {
    return (
        <div className="header" style={{backgroundImage:'url("https://images.unsplash.com/photo-1500964757637-c85e8a162699?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGJhY2tncm91bmQlMjBjb3ZlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80")'}}> 
           <div className="header-content-container">
               <h1>Unsplash</h1>
               <p>The internet’s source of freely-usable images. <br />
                Powered by creators everywhere.</p>

                <div className="header-input-container">
                    <SearchIcon className="search"/>
                    <input type="text" placeholder="Search free high-resolution photos"/>
                    <CenterFocusWeakIcon className="camera"/>
                </div>
           </div>
        </div>
    )
}

export default Header
