import React from 'react';
import Navbar from '../components/NavBar';
import Logo from '../components/Logo';

function Header() {
  return (
    <div className='header-parent'>
      <Logo/>
      <Navbar />
      <div className='header-child'>
        <div className='typing-demo'>
          <h1>Hello!, I'm Edward</h1>
          <h2>
            My name is Allan Edward vargas. I'm a cyber security graduate
            based in Manchester, UK. I'm commited to a secure digital
            future for businesses and individuals.
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Header;