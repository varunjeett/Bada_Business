import React from 'react'
import img1 from './Media/banner3.gif'
import './Landing.css'
function Landing3() {
    return (
        <div className="landing__gifleft">
            <div className="landing__head">
                <h1>Problem Solving Courses (PSC)</h1>
            </div>

            <div className="landing__all">
                <div className="landing__gif">
                    <img src={img1} alt="Relevant Photograph here" />
                </div>
                <div className="landing__text">
                    <p>
                        - Do you want to find solutions to your daily burning business problems?<br />
                        - Do you want to move away from being an operator to being in charge/controller of your business?<br />
                        - Do you want to Learn effective strategies to market your business/products?<br />
                        - Do you want to introduce automation in your business?<br />
                        - Do you want to take right financial/investment decisions for your business?<br />
                        - Do you want to acquire new customers and need help?<br />
                        - Do you want to learn strategies to thrive in Cut throat competition?<br /> <br />

                        <b>Problem Solving Courses are designed by Dr. Vivek Bindra's motivational speaker and international business coach to give practical solutions & learning to the most important burning problems faced by Entrepreneurs.
                           If you are interested in starting your own business or want to expand your existing business, but, are facing specific challenges, you can buy these courses.</b>  </p>
                </div>
            </div>
        </div>
    )
}



export default Landing3
