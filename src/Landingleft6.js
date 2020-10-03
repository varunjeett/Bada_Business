import React from 'react'
import img1 from './Media/banner6.gif'
import './Landingleft.css'
function Landingleft6() {
    return (
        <div className="landingleft__gifleft">
            <h1>Business Case Studies on Social Media</h1>
            <div className="landingleft__all">
                <div className="landingleft__text">
                    <p>
                        - Are you struggling to reach the decision-makers in your marketing activities?<br />
                        - Do you want to exponentially grow your brand image in a short span of time?<br />
                        - Do you want to build franchises or distribution network PAN India?<br />
                        - Are your marketing activities attracting the right number of leads to grow your business?<br />
                        - Do you wish to showcase your brand on Youtube's no 1 Entrepreneurship Training Channel?<br /> <br />

                        <b>Get engaging and impressive Video format Case Studies by Dr. Vivek Bindra – Founder & CEO of Bada Business Pvt Ltd.<br />
                           Case studies are based on an in-depth study of your product/service along with competitive analysis.</b><br />
                           Connect with us for a detailed discussion on the subject. </p>
                </div>
                <div className="landingleft__gif">
                    <img src={img1} />
                </div>
            </div>
        </div>
    )
}



export default Landingleft6
