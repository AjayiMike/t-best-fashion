import React, {useState} from 'react';
import {Link} from 'react-router-dom';


const Navigation = () => {
    const [navIsOpen, setNavIsOpen] = useState(false);
    const [showSubItems, setShowSubItems] = useState(false);

    // handles showing/hidding navs
    const navClick = () => {
        if(navIsOpen === false) {
            document.querySelector('#nav-bar-nav').style.display = 'block';
            setNavIsOpen(true);
        }else {
            document.querySelector('#nav-bar-nav').style.display = 'none';
            document.querySelector('.nav-drop-down').style.display = 'none';
            setShowSubItems(false)
            setNavIsOpen(false);
        } 
    }

    // handles categories dropdown toggle
    const showSub = () => {
        if (showSubItems === false) {
            document.querySelector('.nav-drop-down').style.display = 'block';
            setShowSubItems(true)
        }else{
            document.querySelector('.nav-drop-down').style.display = 'none';
            setShowSubItems(false)
        }
    }


    // handles closing dropdown when something else is being clicked
    // const closeDropDown = () => {
    //     if(showSubItems) {
    //         document.querySelector('.nav-drop-down').style.display = 'none';
    //         setShowSubItems(false);
    //     }
    // }
    
    return ( 
        <div id = 'nav-bar'>
            <div id = 'nav-bar-brand'>
                <h5>T-Best<span style = {{color:'#cf5c36'}}>Fashion</span></h5>
            </div>
            <div id = 'harmburger' onClick = {navClick} >
                <div id = 'harmburger-bar'></div>
            </div>
            <ul id = 'nav-bar-nav'>
                <li className = 'nav-item' onClick = {navClick}>
                    <i className = 'fa fa-home'></i>
                    <Link to = '/' className = 'nav-links'> HOME</Link>
                </li>
                <li className = 'nav-item'>
                <i className = 'fa fa-lg fa-caret-down'></i>
                    <span  className = 'nav-links'  onClick = {showSub}> CATEGORIES</span>
                    <ul className = 'nav-drop-down'>
                        <li className = 'nav-sub-item'>
                            <Link to = '/categories/suit' className = 'nav-links' onClick = {navClick} >SUIT</Link>
                        </li>
                        <li className = 'nav-sub-item'>
                            <Link to = '/categories/native wears' className = 'nav-links' onClick = {navClick} >NATIVE WEARS</Link>
                        </li>
                        <li className = 'nav-sub-item'>
                            <Link to = '/categories/casuals' className = 'nav-links' onClick = {navClick} >JEANS</Link>
                        </li>
                        <li className = 'nav-sub-item'>
                            <Link to = '/categories/shirts &amp; trousers' className = 'nav-links' onClick = {navClick}>SHIRTS &amp; TROUSERS</Link>
                        </li>
                    </ul>
                </li>
                <li className = 'nav-item' onClick = {navClick}>
                <i className = 'fa fa-list'></i>
                    <Link to = '/services' className = 'nav-links'> SERVICES</Link>
                </li>
                <li className = 'nav-item' onClick = {navClick}>
                <i className = 'fa fa-info-circle'></i>
                    <Link to = '/about' className = 'nav-links'> ABOUT</Link>
                </li>
                <li className = 'nav-item' onClick = {navClick}>
                <i className = 'fa fa-phone'></i>
                    <Link to = '/contact'className = 'nav-links'> CONTACT</Link>
                </li>
            </ul>
        </div>
     );
}
 
export default Navigation;
