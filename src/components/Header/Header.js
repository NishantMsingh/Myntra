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
    if (window.innerWidth <= 768) {
      setMenu(!menu);
    }
  };

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <header className="header-absolute bg-d">
      <div className=""><img src={logo} alt='LOGO' className='img-fluid w-10 me-3' /></div>
      <div className='d-flex align-items-center justify-content-between flex-row'>

       

        <nav className={menu ? 'heigh' : 'dark'}>
          <span> <a href='#hero' onClick={menuHandler}>MEN</a></span>
          <span><a href='#About' onClick={menuHandler}>WOMEN</a></span>
          <span><a href='#Skills' onClick={menuHandler}>KID</a></span>
          <span><a href='#Projects' onClick={menuHandler}>HOME & LIVING</a></span>
          <span><a href='#About' download onClick={menuHandler}>BEAUTY</a></span>
          <span><a href='#Contact' onClick={menuHandler}>STUDIO <sup className='tm'>TM</sup></a></span>
          <form onSubmit={e => e.preventDefault()} className='header-search'>
         <span> <RiSearchLine/></span>
          <input
            type='text'
            placeholder='Search for product, brand and more...'
            value={searchValue}
            
            onChange={handleSearchChange}
          />
        </form>
        </nav>
       
       
       
      </div>

      <div className='d-flex align-items-center justify-content-between flex-row'>

        
        <div className='user-cart-wish'>
             <span><CgProfile fontSize={"1.3rem"}/></span>
             <span className='mobile'>Profile</span>
        </div>
        <div className='user-cart-wish pos-top-5'>
        <span><sup className='cart-number'>200</sup></span>
             <span><AiOutlineHeart fontSize={"1.3rem"}/></span>
             <span className='mobile'>Wish List</span>
        </div>

        <div className='user-cart-wish pos-top-5'>
             <span><sup className='cart-number'>200</sup></span>
             <span onClick={menuHandler} className='d-flex flex-row'><BsFillBagFill fontSize={"1.3rem"}/> </span>
             <span className='mobile'>Bag</span>
        </div> 
        <div className='user-cart-wish burger'>
             <span onClick={menuHandler}><CgMenuRight fontSize={"2rem"}/></span>
         
        </div>

    
      </div>
    </header>
  );
};

export default Header;
