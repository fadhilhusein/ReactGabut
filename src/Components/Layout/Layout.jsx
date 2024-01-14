import React, { useEffect, useRef, useState } from 'react'
import styles from './index.module.css'
import style from './style.css'
import { Link, Outlet } from 'react-router-dom'
import setting from '../../image/settings.svg'
import phone from '../../image/phone.svg'

function Layout() {
  const menuRef = useRef();

  const [open, setOpen] = useState(false);

  useEffect(() => {
    function handler(e) {
      if(!menuRef.current.contains(e.target)) {
        setOpen(false);
        console.log(menuRef)
      }
    }

    document.addEventListener('mousedown', handler);

    return () => {
          document.removeEventListener('mousedown', handler);
        }
  })


  return (
    <div className={styles.layout}>
        <nav className={styles["navigation-bar"]}>
            <ul className={styles["navigation-bar__links"]}>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
            <div className={styles["navigation-bar__hamburger"]} onClick={() => setOpen(!open)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul ref={menuRef} className={`navigation-bar__dropdown ${open? "active":"inactive"}`}>
              <li>
                <img src={setting} alt="settings" />
                <Link to="/about">Setting</Link>
              </li>
              <li>
              <img src={phone} alt="Phone" />
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
        </nav>
        <Outlet/>
    </div>
  )
}

export default Layout