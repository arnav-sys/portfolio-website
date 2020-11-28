import React from 'react';
import {FaPlay} from "react-icons/fa"
import { Link } from 'react-router-dom';


const banner = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <div className="header__content">
                            <div className="header__section">
                            <h1>I am arnav aggarwal</h1>
                            <p>I am a professional full stack react developer</p>
                            <div className="header__buttons">
                                <Link to="/work" className="btn btn-outline">My Portfolio</Link>
                                &nbsp;&nbsp;&nbsp;
                                <Link to="/about" className="btn btn-smart"><FaPlay/></Link>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default banner
