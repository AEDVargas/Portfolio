import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(){
    return(
      <nav className='navbar'>
        <h1>Allan Edward Vargas </h1>
        <div className='links'>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
        </div>
      </nav>  
    );
}

export default Navbar;