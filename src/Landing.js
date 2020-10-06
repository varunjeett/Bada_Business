import React from 'react'
import img1 from './Media/banner1.gif'
import './Landing.css'


function Landing() {
    return (
        <div className="landing__gifleft">
            <div className="landing__head">
                <h1>Everything About Entrepreneurship (EAE) Program</h1>
            </div>
            
            <div className="landing__all">
                <div className="landing__gif">
                    <img src={img1}  alt=""/>
                </div>
                <div className="landing__text">
                    <p>
                    - Do you want to grow your business multi-fold? <br />
                    - Are you searching for strategies to solve your business problems? <br />
                    - Has the downturn in the economy due to Corona, impacted your business? <br />
                    - Do you wish to expand your business in different geographies? <br />
                    - Do you want to grow your business Profitably? <br />
                    - Do you aspire to Learn business Strategies from Eminent Business Leaders and Industry Experts? <br /> <br />

                    <b>Everything about Entrepreneurship course is the World’s Most Affordable Complete Business Management Program in Hindi.
                    EAE is a 2 years’ App based learning program, now Learn Anytime, Anywhere only on Bada Business Application.</b>  </p>
                </div>
            </div>
        </div>
    )
}



export default Landing
