import React from 'react';
import logo from '../assets/imgs/logo.png';
import anh from '../assets/imgs/6.jpg';
import '../assets/css/header.css';
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineBell } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";



const Header = () => {
  return (
    <div className='header'>
      <div className='header-left'>
        <img src={logo} alt='logoSms' />
        <div className='header-input'>
          <input placeholder='Search' />
          <span><AiOutlineSearch /></span>
        </div>
      </div>
      <div className='header-right'>
        <AiOutlineMail />
        <AiOutlineBell />
        <img src={anh} alt='user' className='anhImge' />
      </div>
    </div>
  )
}

export default Header