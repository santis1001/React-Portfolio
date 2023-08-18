import React, { useState } from 'react';
import logo from '../../assets/images/profile_pic.jpg'

import NavBar from '../Navigation'

const Header = ({currentPage, handlePageChange}) => {
    return (
        <header>
            <div class="header_title">
                <img src={logo} alt='logo'/>
                <h1>Santiago Valenzuela </h1>
            </div> 
            <NavBar currentPage={currentPage} handlePageChange={handlePageChange}/>
            
        </header>
    );
}

export default Header;