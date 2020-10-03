import React from 'react'
import img1 from './Media/banner4.gif'
import './Landingleft.css'
function Landingleft4() {
    return (
        <div className="landingleft__gifleft">
            <h1>Life Time Membership (LTM)</h1>
            <div className="landingleft__all">
                <div className="landingleft__text">
                    <p>
                        - Do you end up wasting a lot of time in finding the right documents to run your business?<br />
                        - Do you have a business and you pay lakhs of rupees to experts for building important documents like contracts, policies, legal compliances?<br />
                        - Do you want to grow your learning for a lifetime with just one investment?<br />
                        - Do you wish to subscribe to all digital courses offered by Bada Business with just one investment?<br /> <br />

                        <b>When you become a Life-time member of Bada Business you get:<br />

                        Lifetime access to all our current and future Digital Learning Course (Including EAE and All PSCs)<br />
                        Opportunity to attend 2 EAE Events<br />
                        Lifetime access to Aladdin Ka Chirag</b>  </p>
                </div>
                <div className="landingleft__gif">
                    <img src={img1} />
                </div>
            </div>
        </div>
    )
}



export default Landingleft4
