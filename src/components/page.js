import React from 'react'
import About from './About'
import Services from './services'
import Work from './work'
import Banner from "./banner"
import {FooterContainer} from './page-form'
import Contactform from './contact-form'


function page() {
    return (
        <div>
            <Banner/>
            <div className="commonBorder"></div>
            <About/>
            <div className="commonBorder"></div>
            <Services/>
            <div className="commonBorder"></div>
            <Work/>
            <div className="commonBorder"></div>
            <Contactform/>
            <div className="commonBorder"></div>
        </div>
    )
}

export default page
