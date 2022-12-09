import React from 'react';
import styles from '../Footer/Footer.module.scss'
import logo from '../../../src/imageLogo.svg'
import { NavLink } from 'react-router-dom';
import Facebook from '../../../src/Facebook.svg'
import Twitter from '../../../src/Twitter.svg'
import Instagram from '../../../src/Instagram.svg'

const Footer = () => {
    return (
        <div className={styles.Footer}>
            <div className={styles.Footer__div}>
                <ul className={styles.Footer__dataColumn1}>

                    <li className={styles.Footer__item}>
                        <h4 className={styles.Footer__title}>Contact Us</h4>
                    </li>

                    <li className={styles.Footer__item}>
                        <p className={styles.Footer__location}>9 W 53rd St, London, NY 10019, UK</p>
                    </li>

                    <li className={styles.Footer__item}>
                        <p className={styles.Footer__number}>+1 212-344-1230 <br />
                            +1 212-555-1230</p>
                    </li>

                </ul>

                <ul className={styles.Footer__dataColumn2}>

                    <li className={styles.Footer__item}>
                        <img src={logo} alt="logo" />
                    </li>

                    <li className={styles.Footer__item}>
                        <p>"The best way to find yourself is to lose yourself in the service of others.”</p>
                        <NavLink to='https://ru-ru.facebook.com/' className={active => active.isActive ? styles.Navbar__nav__active : styles.Navbar__nav__passive}> <img src={Facebook} alt="facebook" /> </NavLink>
                        <NavLink to='https://twitter.com/' className={active => active.isActive ? styles.Navbar__nav__active : styles.Navbar__nav__passive}> <img src={Twitter} alt="twitter" /> </NavLink>
                        <NavLink to='https://www.instagram.com/' className={active => active.isActive ? styles.Navbar__nav__active : styles.Navbar__nav__passive}> <img src={Instagram} alt="instagram" /> </NavLink>
                    </li>

                </ul>

                <ul className={styles.Footer__dataColumn3}>

                    <li className={styles.Footer__item}>
                        <p>Working Hours</p>
                    </li>

                    <li className={styles.Footer__item}>
                        <p>Monday-Friday: <br />
                            08:00 am -12:00 am</p>
                    </li>

                    <li className={styles.Footer__item}>
                       <p>
                       Saturday-Sunday: <br />
                        07:00am -11:00pm
                       </p>
                    </li>

                </ul>

            </div>
            <p className={styles.Footer__endParagraph}>2022 Pop online. All Rights reserved.</p>
        </div>
    );
}

export default Footer;
