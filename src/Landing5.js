import React from 'react'
import img1 from './Media/banner5.gif'
import './Landing.css'


function Landing5() {
    return (
        <div className="landing__gifleft">
            <h1>Customized Learning Solutions - White Labeled LMS</h1>
            <div className="landing__all">
                <div className="landing__gif">
                    <img src={img1} />
                </div>
                <div className="landing__text">
                    <p>
                        - Do you want to provide practical and realistic knowledge to your Students/Employees?<br />
                        - Are you looking for new and modern techniques to grow learnings of your Stundents/Employees?<br />
                        - For the bright future of your students, are you looking for an additional course which offers them dual certification along with the degree?<br />
                        - Are you looking for any kind of skill enhancement program to increase the productivity of your employees?<br />
                        - Do you want offer practical business learnings to your employees from the top businessmen and influencers of our country?<br /> <br />

                        <b>Reach out to us for customized solutions suited to your business needs and requirements.</b>  </p>
                </div>
            </div>
        </div>
    )
}



export default Landing5
