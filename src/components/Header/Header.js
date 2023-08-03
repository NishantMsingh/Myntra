<<<<<<< HEAD
// Header.js
import React, { useState } from 'react';
import './Header.css';
import { RiSearchLine } from 'react-icons/ri';
import { CgProfile } from 'react-icons/cg';
import { CgMenuRight } from 'react-icons/cg';


import { BsFillBagFill } from 'react-icons/bs';
import logo from "../../Assets/Images/Logo.png";
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [menu, setMenu] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const menuHandler = () => {
    if (window.innerWidth <= 1000) {
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
          <span> <NavLink to="/Men" onClick={menuHandler}>MEN</NavLink></span>
          <span><NavLink  to="/Women" onClick={menuHandler}>WOMEN</NavLink></span>
          <span><NavLink  to="/Kid" onClick={menuHandler}>KID</NavLink></span>
          <span><NavLink  to="/Home" onClick={menuHandler}>HOME & LIVING</NavLink></span>
          <span><NavLink  to="/Beauty" onClick={menuHandler}>BEAUTY</NavLink></span>
          <span><NavLink  to="/Studio" onClick={menuHandler}>STUDIO <sup className='tm'>TM</sup></NavLink></span>
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
             <span>Profile</span>
        </div>
      
        <div className='user-cart-wish pos-top-5'>
             <span><sup className='cart-number'>200</sup></span>
             <span onClick={menuHandler} className='d-flex flex-row'><BsFillBagFill fontSize={"1.3rem"}/> </span>
             <span>Bag</span>
        </div> 
        <div className='user-cart-wish burger'>
             <span onClick={menuHandler}><CgMenuRight fontSize={"2rem"}/></span>
         
        </div>

    
      </div>
    </header>
  );
};

export default Header;
=======
// Header.js
import React, { useState } from 'react';
import './Header.css';
import { RiSearchLine } from 'react-icons/ri';
import { CgProfile } from 'react-icons/cg';
import { CgMenuRight } from 'react-icons/cg';


import { BsFillBagFill } from 'react-icons/bs';
import logo from "../../Assets/Images/Logo.png";
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [menu, setMenu] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const menuHandler = () => {
    if (window.innerWidth <= 1000) {
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
          <span> <NavLink to="/Men" onClick={menuHandler}>MEN</NavLink></span>
          <span><NavLink  to="/Women" onClick={menuHandler}>WOMEN</NavLink></span>
          <span><NavLink  to="/Kid" onClick={menuHandler}>KID</NavLink></span>
          <span><NavLink  to="/Home" onClick={menuHandler}>HOME & LIVING</NavLink></span>
          <span><NavLink  to="/Beauty" onClick={menuHandler}>BEAUTY</NavLink></span>
          <span><NavLink  to="/Studio" onClick={menuHandler}>STUDIO <sup className='tm'>TM</sup></NavLink></span>
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
             <span>Profile</span>
        </div>
      
        <div className='user-cart-wish pos-top-5'>
             <span><sup className='cart-number'>200</sup></span>
             <span onClick={menuHandler} className='d-flex flex-row'><BsFillBagFill fontSize={"1.3rem"}/> </span>
             <span>Bag</span>
        </div> 
        <div className='user-cart-wish burger'>
             <span onClick={menuHandler}><CgMenuRight fontSize={"2rem"}/></span>
         
        </div>

    
      </div>
    </header>
  );
};

export default Header;
>>>>>>> 196c434fd0ef497977ed85c89032fe7cfc4a07f1
