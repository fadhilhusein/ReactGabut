import React, { useState } from 'react'
import * as FaIcons from "react-icons/fi";
import { Link, Outlet, useLocation } from 'react-router-dom';
import style from './style.css'
import {NavbarData} from './NavbarData';
import logo from '../../image/home and garden.png'

function Navbar() {
  const [sidebar, setSidebar] = useState();
  const toggleSidebar = () => {setSidebar(!sidebar)};

  const location = useLocation();
  console.log(location.pathname)
  
  return (
    <>
    <div className={'navbar'}>
      <Link to='#' className={"menuBar"} onClick={toggleSidebar}>
        <FaIcons.FiMenu/>
      </Link>
      <div className="image-container">
        <img src={logo} alt="home and garden" style={{width: '100%', height: '100%'}}/>
      </div>
      <nav className={sidebar ? "navbar-menu active": "navbar-menu" }>
        <ul className={"navbar__items"}>
          <li className={"navbar__toggle"}>
            <Link to='#' className={"menuBar"} onClick={toggleSidebar}>
              <FaIcons.FiX/>
            </Link>
          </li>
          {NavbarData.map((item, index) => {
            return (
              <li key={index} className={'navbar-text'}>
                <Link to={item.path} onClick={toggleSidebar} className={item.path === location.pathname? 'active-path': 'inactive-path'}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </div>
    <main>
      <Outlet/>

      <div className={`blur ${sidebar? 'active' : ''}`}></div>      
    </main>
    </>
  )
}

export default Navbar