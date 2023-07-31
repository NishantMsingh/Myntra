// Header.js
import React, { useState } from 'react';
import './Header.css';
import { RiSearchLine } from 'react-icons/ri';
import { CgProfile } from 'react-icons/cg';
import { CgMenuRight } from 'react-icons/cg';
import { AiOutlineHeart } from 'react-icons/ai';

import { BsFillBagFill } from 'react-icons/bs';
import logo from "../../Assets/Images/Logo.png";

const Header = () => {
  const [menu, setMenu] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const menuHandler = () => {
    if (window.innerWidth <= 992) {
      setMenu(!menu);
    }
  };

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <header className="header-absolute bg-d">
      <div className="max-20"><img src={logo} alt='LOGO' className='img-fluid w-10' /></div>
      <div className='d-flex align-items-center justify-content-between flex-row'>

       

        <nav className={menu ? 'heigh' : 'dark'}>
          <span> <a href='#hero' onClick={menuHandler}>MEN</a></span>
          <span><a href='#About' onClick={menuHandler}>WOMEN</a></span>
          <span><a href='#Skills' onClick={menuHandler}>KID</a></span>
          <span><a href='#Projects' onClick={menuHandler}>HOME & LIVING</a></span>
          <span><a href='#About' download onClick={menuHandler}>BEAUTY</a></span>
          <span><a href='#Contact' onClick={menuHandler}>STUDIO <sup className='text-dark'>TM</sup></a></span>
        </nav>
       
       
      </div>

      <div className='d-flex align-items-center justify-content-between flex-row'>

      <form onSubmit={e => e.preventDefault()} className='header-search'>
         <span> <RiSearchLine/></span>
          <input
            type='text'
            placeholder='Search for product,brand and more...'
            value={searchValue}
            
            onChange={handleSearchChange}
          />
        </form>
        <div className='user-cart-wish'>
             <span><CgProfile fontSize={"1.3rem"}/></span>
             <span>Profile</span>
        </div>
        <div className='user-cart-wish'>
             <span><AiOutlineHeart fontSize={"1.3rem"}/></span>
             <span>Wish List</span>
        </div>

        <div className='user-cart-wish'>
             <span><BsFillBagFill fontSize={"1.3rem"}/></span>
             <span>Bag</span>
        </div>

        <CgMenuRight fontSize="2rem" color="dark" onClick={menuHandler} />
      </div>
    </header>
  );
};

export default Header;
