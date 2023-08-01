import React, { useState } from 'react';
import logo from '../../assets/images/profile_pic.jpg'

import NavBar from '../Navigation'

const Header = () => {
    return (
        <header>
            <div class="header_title">
                <img src={logo} />
                <h1>Santiago Valenzuela </h1>
            </div> 
            <NavBar/>
            
        </header>
    );
}

export default Header;