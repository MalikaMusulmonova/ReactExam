import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../Navbar/Navbar.module.scss'
import logo from '../../../src/image_2.svg'
import Facebook from '../../../src/Facebook.svg'
import Twitter from '../../../src/Twitter.svg'
import Instagram from '../../../src/Instagram.svg'


const Navbar = () => {
    return (
        <div className={styles.Navbar}>
            <NavLink to='/'><img src={logo} alt="logo" /></NavLink>
            <div className={styles.Navbar__nav}>
                <NavLink to='/' className={active => active.isActive ? styles.Navbar__nav__active : styles.Navbar__nav__passive}>Menu</NavLink>
                <NavLink to='/about' className={active => active.isActive ? styles.Navbar__nav__active : styles.Navbar__nav__passive}>About us</NavLink>
                <NavLink to='/news' className={active => active.isActive ? styles.Navbar__nav__active : styles.Navbar__nav__passive}>News</NavLink>
                <NavLink to='https://ru-ru.facebook.com/' className={active => active.isActive ? styles.Navbar__nav__active : styles.Navbar__nav__passive}> <img src={Facebook} alt="facebook" /> </NavLink>
                <NavLink to='https://twitter.com/' className={active => active.isActive ? styles.Navbar__nav__active : styles.Navbar__nav__passive}> <img src={Twitter} alt="twitter" /> </NavLink>
                <NavLink to='https://www.instagram.com/' className={active => active.isActive ? styles.Navbar__nav__active : styles.Navbar__nav__passive}> <img src={Instagram} alt="instagram" /> </NavLink>
                <NavLink to='/login' className={active => active.isActive ? styles.Navbar__nav__activeBtn : styles.Navbar__nav__passiveBtn}>Login</NavLink>
            </div>
        </div>
    );
}

export default Navbar;
