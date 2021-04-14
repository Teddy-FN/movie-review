import React from 'react'
import '../../style/Header.css'

import { Button } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';

function Header() {
    return (
        <header className="header-wrapper">
            <div className="wrapper-header">
                <div className="header-navigasi">
                    <div className="logo-header">
                        <img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg" alt="The Movie Database (TMDb)" width="154" height="20" />
                    </div>
                    <nav className="nav">
                        <ul>
                            <li>Film</li>
                            <li>Serial TV</li>
                            <li>Orang</li>
                            <li>More</li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div className="header-logo">
                <div className="container-logo">
                    <AddIcon />
                    <NotificationsIcon />
                    <button className="btn signup">Sign Up</button>
                    <SearchIcon />
                </div>
            </div>
        </header>
    )
}

export default Header
