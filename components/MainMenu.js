import React, { Component } from "react";



/*import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom"*/

import Link from 'next/link'

// THIS ALL NEEDS TO BE DECOUPLED!

/*import Home from "./Home"
import checkIn from "./check-in"
import Explore from "./Explore"
import Story from "./Story"
import Support from "./Support"
import Membership from "./Membership"
import Visits from "./Visits"
import Footer from "./Footer"
import MercuryWinery from "./MercuryWinery"
import Purchase from "./Purchase"
import Dashboard from "./Dashboard"
import MyVisits from "./MyVisits"
import MyDetails from "./MyDetails"*/
//import redbackground from "../img/red-background.jpg"
//import logo from "../img/beyond-napa-logo.png"

import Head from 'next/head'

import { faBars } from '@fortawesome/free-solid-svg-icons'

import Footer from "../components/Footer"
//import Tester from "./Tester"

//font awesome "hamburger"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const elementx = <FontAwesomeIcon icon={faBars} />

 
export default function Main() {
  return (
      <div>
        <Head>
          <title>Beyond Napa Valley -- Let's Explore Wine!</title>
          <link href="/static/css/index.css" rel="stylesheet" />
          <link href="/static/css/unsemantic-grid-responsive-tablet-no-ie7.css" rel="stylesheet" />
          <link href="/static/css/unsemantic.css" rel="stylesheet" />
          <link rel="icon" type="image/x-icon" href="/static/favicon.ico" />
        </Head>
        <nav>
        
          <div className="clear"></div>
          <div className="columns">
          	<div className="leftCol">
          		<Link href="/"><span className="logo"><a>Beyond Napa Valley</a></span></Link>
          	</div>
          	
          	<div className="rightCol">
          	<ul className="header">
              
                <li><Link href="/explore"><a><span className="topMenuClass">Explore</span></a></Link></li>
                <li><Link href="/story"><a><span className="topMenuClass">Our Story</span></a></Link></li>
                <li><Link href="/membership"><a><span className="topMenuClass">Membership Benefits</span></a></Link></li>
                <li><Link href="/purchase"><a><span className="topMenuClass">Join</span></a></Link></li>
                <li><Link href="/purchase"><a><span className="topMenuClass join">LOG IN</span></a></Link></li>
                { /* THIS WILL BECOME THE HAMBURGER MENU
                <li>
                  <button className="hbIcon" onclick="this.hbClick">
                    <i className="fa fa-bars"></i>
                  </button>
                </li> */ }

      	   </ul>
          </div>
          </div>
          
          <div className="clear"></div>
        </nav>
      </div>
  )
}