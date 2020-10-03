import React from 'react'
import './Header.css'
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import logo from './Media/logo.png'


function Header() {
    return (
        <div className="header">
            <div className="header__div">
                <img src={logo} />
            </div>



            <div className="header__icons">
                <div className="header__icons__css">
                     <InstagramIcon fontSize="large"/>
                </div>
                <div className="header__icons__css">
                     <FacebookIcon fontSize="large" />
                </div>

            </div>


        </div>
    )
}

export default Header
