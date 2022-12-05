import logo from '../images/logo.svg';
import hamIcon from '../images/icon-hamburger.svg';
import closeIcon from '../images/icon-close.svg';
import { useEffect, useState } from 'react';
const Header =()=>{
    let checkbox = '';
    useEffect(()=>{
        checkbox = document.querySelector('#navCheckbox');
    })
    const [mobileNavOpen, setMobileNavOpen] =useState(false)
    return(
        <header>
            <div className="header__inner">
            <nav className={mobileNavOpen?`nav-open-mobile`:""}>
                <label htmlFor="navCheckbox" className='navCheckboxLabel' onClick={()=>{
                        console.log(!checkbox.checked);
                        setMobileNavOpen(!checkbox.checked)
                    }}>
                    <div className="menuIcon"><img src={mobileNavOpen?closeIcon:hamIcon} alt=""/></div>
                </label>
                <div className="logo"><img src={logo} alt="logo" /></div>
                
                <input type="checkbox" name="navCheckbox" id="navCheckbox"/>
                <ul className="nav-list">
                    <a href="#home">home</a>
                    <a href="#shop">shop</a>
                    <a href="#about">about</a>
                    <a href="#contact">contact</a>
                </ul>
            </nav>
            </div>
            
        </header>
    )
}

export default Header