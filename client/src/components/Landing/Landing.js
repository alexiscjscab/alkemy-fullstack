import React from 'react';
import LandingCtn from './styledLanding';
import {Link} from 'react-router-dom';


const Landing = () => {
    return (
        <LandingCtn>
            <div className='title'>
                <h2>Alkemy Full Stack Challenge</h2>
                <h4>NodeJs Express PostgresSql</h4> 
                <h4>ReactJs Redux Styled-Components Axios</h4>
            </div>

            <div className='home'>
                <Link to = '/home'>
                    <p>HOME</p>
                </Link> 
            </div>
        </LandingCtn>
    )
}

export default Landing;
