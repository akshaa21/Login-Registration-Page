import React, { useState } from 'react'
import './Header.css'
import { BiWorld } from "react-icons/bi";
import { FaPhone, FaEnvelope, FaMoon} from "react-icons/fa6";
import { IoMdArrowDropdown, IoMdClose, IoIosMenu } from "react-icons/io";
import logo_light from '../../assets/logo-white.png'
import logo_dark from '../../assets/logo-black.png'
import dark_theme from '../../assets/dark.png'
import light_theme from '../../assets/light.png'
import Dropdown from '../Dropdown/Dropdown';
import DropdownCallUs from '../Dropdown/DropdownCallUs';
import DropdownOpenTools from '../Dropdown/DropdownOpenTools';
import DropdownProducts from '../DropdownProducts';
import DropdownResources from '../Dropdown/DropdownResources';


const Header = ({theme, setTheme}) => {
  
  const [openDropdown, setOpenDropdown] = useState(false);
  const [openDropdownCallUs, setOpenDropdownCallUs] = useState(false);
  const [openDropdownOpenTools, setOpenDropdownOpenTools] = useState(false);
  const [openDropdownProducts, setOpenDropdownProducts] = useState(false);
  const [openDropdownResouces, setOpenDropdownResources] = useState(false);

  const toggle_mode = () => {
    theme == 'light' ? setTheme('dark') : setTheme('light');
  }

  const showSidebar = () => {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
  }

  const hideSidebar = () => {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
  }

  return (
    <div className='wrapper'>
      <div className='head'>
        <header className='header-main'>
            <div className='titles'>
                <ul>
                    <li className='dropdown' onClick={() => setOpenDropdown((prev) => !prev)}>
                       <div className='icons hideOnMobile'><BiWorld /></div><a href="#" className='hideOnMobile'>English <span className='dropdown-icon'><IoMdArrowDropdown/></span></a>
                    </li>
                    <li className='dropdown' onClick={() => setOpenDropdownCallUs((prev) => !prev)}><div className='icons hideOnMobile'><FaPhone /></div><a href="#" className='hideOnMobile'>Call Us <span><IoMdArrowDropdown/></span></a></li>
                    <li><div className='icons hideOnMobile'><FaEnvelope /></div><a href="#" className='hideOnMobile'>Contact Us</a></li>
                </ul>
            </div>

            <div className='header'>
                <nav className='navbar'>
                    <ul className='items sidebar'>
                         <img src={theme == 'light' ? logo_light : logo_dark} alt="" className='logo' onClick={hideSidebar} />
                        <li><a href="">Online Assessment Tools <span className='dropdown-icon'><IoMdArrowDropdown/></span></a></li>
                        <li><a href="">Products <span className='dropdown-icon'><IoMdArrowDropdown/></span></a></li>
                        <li><a href="">Resources <span className='dropdown-icon'><IoMdArrowDropdown/></span></a></li>
                          <div className='btn1'><button className='login'>Log in</button></div>
                        <li className='dropdown titles'><div className='icons'><BiWorld /></div><a href="#">English <span className='dropdown-icon'><IoMdArrowDropdown/></span></a>
                          {/* <ul className='flex flex-col dropdown-titles'>
                              <li><a href="">English</a></li>  
                              <li><a href="">German</a></li>  
                              <li><a href="">Spanish</a></li>  
                              <li><a href="">Portuguese</a></li>  
                              <li><a href="">Indonesian</a></li>  
                              <li><a href="">French</a></li>  
                          </ul> */}
                        </li>
                        <li className='dropdown titles'><div className='icons'><FaPhone /></div><a href="#">Call Us <span><IoMdArrowDropdown/></span></a>
                          {/* <ul className='flex flex-col dropdown-titles'>
                              <li><a href="">Enquriy: +91 9555114444</a></li>  
                              <hr className='h-line' />
                              <li><a href="">Test-Taker Support: +91-8047189190</a></li>  
                          </ul> */}
                        </li>
                        <li className='titles'><div className='icons'><FaEnvelope /></div><a href="#">Contact Us</a></li>
                    </ul>

                     <img src={theme == 'light' ? logo_light : logo_dark} alt="" className='logo' />                  
                     <ul className='items'>
                        <li onClick={() => setOpenDropdownOpenTools((prev) => !prev)}><a href="" className='hideOnMobile'>Online Assessment Tools <span className='dropdown-icon'><IoMdArrowDropdown/></span></a></li>
                        <li onClick={() => setOpenDropdownProducts((prev) => !prev)}><a href="" className='hideOnMobile'>Products <span className='dropdown-icon'><IoMdArrowDropdown/></span></a></li>
                        <li onClick={() => setOpenDropdownResources((prev) => !prev)}><a href="" className='hideOnMobile'>Resources <span className='dropdown-icon'><IoMdArrowDropdown/></span></a></li>
                     </ul>
                  
                     <img onClick={() => {toggle_mode()}} src={theme == 'light' ? dark_theme : light_theme} alt="" className='toggle-icon'/>

                   <div className='btn'>
                    <button className='login'>Log in</button>
                    <button className='get-started hideOnMobile'>Get Started</button>
                   </div>

                   <div className='menu-icons menu-btn' onClick={showSidebar}>< IoIosMenu /></div>
                </nav>
            </div>
        </header>
      </div>
      <div className='description'>
          <h1>Psychometric Testing in Recruitment - Hire The Best Fit</h1>
          <p>The Best Psychometric Tests For Recruitment and L&D- Find Your Ideal Candidate</p>
          <button className='content-btn'>EXPLORE</button>
      </div>
      
      {
         openDropdown && <Dropdown/>
      }
      {
         openDropdownCallUs && <DropdownCallUs/>
      }
      {
         openDropdownOpenTools && <DropdownOpenTools/>
      }
      {
         openDropdownProducts && <DropdownProducts/>
      }
      {
         openDropdownResouces && <DropdownResources/>
      }

    </div>
  )
}

export default Header
//light
// https://assetsprelogin.mettl.com/_next/image/?url=%2Fassets%2Flogo%2FMercer-Mettl.svg&w=256&q=75