import React from 'react'
import img1 from './Media/banner2.gif'
import './Landingleft.css'
function Landingleft() {
    return (
        <div className="landingleft__gifleft">
            <h1>Become an Independent Business Consultant (IBC)</h1>
            <div className="landingleft__all">
                <div className="landingleft__text">
                    <p>
                        - Do you want to build a regular source of income?<br />
                        - Do you want to become your own boss?<br />
                        - Do you want to start your own business with low investment?<br />
                        - Do you want to start a business and seek knowledge how to do it?<br />
                        - Do you want to learn and earn at the same time? <br /> <br />

                        <b>Become an IBC, Learn and Earn at your convenience - Part-time or Full-time.
                           Earn Rs1 Lakh – Rs20 Lakh per month that too at a Very Low Investment!</b>  </p>
                </div>
                <div className="landingleft__gif">
                    <img src={img1} />
                </div>
            </div>
        </div>
    )
}



export default Landingleft
