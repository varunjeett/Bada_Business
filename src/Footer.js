import React from 'react'
import './Footer.css'
import PersonIcon from "@material-ui/icons/Person";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import PhoneIcon from "@material-ui/icons/Phone";
import MailIcon from "@material-ui/icons/Mail";
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import logo from './Media/logo.png'

function Footer() {
    return (
        <div className="footer">

            <div className="footer__logo">
                <img src={logo} alt="Relevant Photograph here" />
            </div>

            <div className="footer__contact">
                <div className="footer__text">
                    <span >
                        <PersonIcon className="icon" />
                    </span>
                    <h5>Simranjeet</h5>
                </div>

                <div className="footer__text">
                    <span><BusinessCenterIcon className="icon"/></span>
                    <h5>IBC </h5>
                </div>

                <div className="footer__text">
                    <span>
                        <PhoneIcon className="icon"/>
                    </span>
                    <h5> 9315744106</h5>
                </div>


                <div className="footer__text">
                    <span>
                        <MailIcon className="icon" />
                    </span>
                    
                    <h5> kuldip_simran@yahoo.com</h5>
                </div>

            </div>


            <div className="footer__icons">   
                <div className="footer__icons__single">
                <a href="https://bit.ly/2EVbbsr" target="_blank" rel="noopener noreferrer" >  { <InstagramIcon fontSize="large" className="icons"/> }</a>
                <a href="https://bit.ly/2GbR4Ha" target="_blank" rel="noopener noreferrer" > { <FacebookIcon fontSize="large" className="icons" /> }</a>
                </div>
            </div>


        </div>
    )
}

export default Footer

