import React from 'react'
import './Header.css'
import PersonIcon from "@material-ui/icons/Person";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import PhoneIcon from "@material-ui/icons/Phone";
import MailIcon from "@material-ui/icons/Mail";
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import logo from './Media/logo.png'

function Header() {
    return (
        <div className="header">

            <div className="header__logo">
                <img src={logo}  alt="Relevant Photograph here" />
            </div>

            <div className="header__contact">
                <div className="header__text">
                    <span >
                        <PersonIcon fontSize="large" className="header__icons" />
                    </span>
                    <h4>Simranjeet kaur</h4>
                </div>

                <div className="header__text">
                    <span><BusinessCenterIcon fontSize="large"className="header__icons"/></span>
                    <h4>IBC </h4>
                </div>

                <div className="header__text">
                    <span>
                        <PhoneIcon  fontSize="large" className="header__icons"/>
                    </span>
                    <h4> 9315744106</h4>
                </div>


                <div className="header__text">
                    <span>
                        <MailIcon fontSize="large"  className="header__icons" />
                    </span>
                    
                    <h4> kuldip_simran@yahoo.com</h4>
                </div>

            </div>


            <div className="header__end__icons">   
                <div className="header__icons__single">
                <a href="https://bit.ly/2EVbbsr" target="_blank" rel="noopener noreferrer" >  { <InstagramIcon fontSize="large"  className="header__icons"/> }</a>
                <a href="https://bit.ly/2GbR4Ha" target="_blank"  rel="noopener noreferrer" > { <FacebookIcon fontSize="large"  className="header__icons" /> }</a>
                </div>
            </div>


        </div>
    )
}

export default Header

