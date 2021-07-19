import React, { Component } from 'react'
import Search from './img/search.png'
import Globe from './img/globe.svg'
import Hamburger from './img/hamburger.png'
import User from './img/user.png'

export default class Home extends Component {
    render() {
        return (
            <div className="home">
               <div className="home-head">Get the latest on our COVID-19 response</div>
               <div className="home-banner">
                   <div className="container">
                       <div className="hoist">
                           Switch to hoisting
                           <img src={Globe}></img>
                           <div className="user">
                           <img src={Hamburger} className="hamburger"></img>
                           <img src={User}></img>
                           </div>
                       </div>
                <h2>Places to stay</h2>
                <div className="home-loc">
                <div className="home-loc-inner">
                        <p>Location</p>
                        <input type="text" placeholder="where you are going"/>
                    </div>
                    <div className="home-loc-inner">
                        <p>Check in</p>
                        <input type="text" placeholder="Add dates"/>
                    </div>
                    <div className="home-loc-inner">
                        <p>Check out</p>
                        <input type="text" placeholder="Add dates"/>
                    </div>
                    <div className="home-loc-inner border-none">
                        <p>Guest</p>
                        <input type="text" placeholder="Add Guests"/>
                    </div>
                    <div className="home-search">                  
                              <img src={Search} alt="Logo" />
                              </div>
                        
                </div>
                <div className="home-content">
                    <h1>
                        Go Near
                    </h1>
                    <p>Explore nearby stays</p>
                </div>
                </div>
               </div>
            </div>
        )
    }
}
