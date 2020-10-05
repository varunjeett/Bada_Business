import React, { useState } from 'react'
import Landing from './Landing'
import Landingleft from './Landingleft'
import './MiddlePage.css'
import f1 from './Media/f1.jpg'
import f2 from './Media/f2.jpg'
import Landing3 from './Landing3'
import Landing5 from './Landing5'
import Landingleft4 from './Landingleft4'
import Landingleft6 from './Landingleft6'
import { db } from "./firebase";
function MiddlePage() {


    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");


    const savedata = (event) => {
        event.preventDefault();

        if (name && email && number && (number.length === 10) && email === ":@:") {
            db.collection("info").add({
                name: name,
                email: email,
                number: number,
            })
                .then(alert("Successfully Saved"))
                .catch((error) => {
                    alert(error.message);
                });
        }
        else {
            alert("Please fill all the fields properly");
        }
        setName("");
        setEmail("");
        setNumber("");
    };



    return (
        <div className="middlePage">
            <div className="middlePage__first">
               
                    <div className="middlePage__form"  >
                        <form className="review__table">
                            <br/>
                            <h2>Register Now</h2>

                            <input type="text" value={name} placeholder="Name"
                                onChange={(e) => setName(e.target.value)}
                            />


                            <input type="email" value={email} placeholder="Email"
                                onChange={(e) => setEmail(e.target.value)} />


                            <input type="tel" value={number} placeholder="Mobile"
                                onChange={(e) => setNumber(e.target.value)} />

                            <input className="review__button" type="submit" onClick={savedata} />

                        </form>

                    </div>
            </div>
            <div className="middlePage__head">
                <div className="middle__landing">
                    <Landing />
                </div>
                <div className="middle__landingleft">
                    <Landingleft />
                </div>
                <div className="middle__landing">
                    <Landing3 />
                </div>
                <div className="middle__landingleft">
                    <Landingleft4 />
                </div>
                <div className="middle__landing">
                    <Landing5 />
                </div>
                <div className="middle__landingleft">
                    <Landingleft6 />
                </div>
            </div>
           
            <div className="middle__bottom">
            <h1>Our Eminent Billionaire Professors</h1>
                <img src={f1} />
                <img src={f2} />
            </div>
            <div className="end__button">
                 <a href="https://www.badabusiness.com/" target="_black">
                <button>View All</button>
            </a>
            </div>
           

        </div>
    )
}

export default MiddlePage
