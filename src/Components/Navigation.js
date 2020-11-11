import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';

// event handler flag
let isEventHandlerAdded = false;


const Navigation = () => {

    // if the site is loaded on a tab or device of less screen size, add an event handler to each of the nav items. this handler handles collapsing the nav bar when any of the nav items is clicked
    window.onload = () => {
        if(window.screen.width < 992) {
            document.querySelectorAll(".nav-item").forEach(item => {
                item.addEventListener("click", handleNavItemClick)
            })
            isEventHandlerAdded = true;
        }
    }


    // add or remove handler to/from nav items depending on the screen size
    const onResize = () => {
        const navItems = document.querySelectorAll(".nav-item");
        if (window.screen.width >= 992 && isEventHandlerAdded) {
            navItems.forEach(item => {
                item.removeEventListener("click", handleNavItemClick)
            })
            document.querySelector(".nav-bar").classList.remove("nav-bar-nav-show");
            document.querySelector('.harmburger').classList.remove('harmburger-open');
            isEventHandlerAdded = false;
        } else if (window.screen.width < 992 && !isEventHandlerAdded) {
            navItems.forEach(item => {
                item.addEventListener("click", handleNavItemClick)
            })
            isEventHandlerAdded = true;

        }
    }
    // adding the onResize handler to the window  
    window.addEventListener("resize", onResize);


    // handles collapsing of the nav bar
    function handleNavItemClick() {
        document.querySelector('.nav-bar').classList.replace('nav-bar-nav-show', 'nav-bar-nav-hide');
        document.querySelector('.harmburger').classList.remove('harmburger-open');
        setNavIsOpen(false);
    }

    const [navIsOpen, setNavIsOpen] = useState(false);

    // handles showing/hidding navs
    const navClick = () => {
        const nav = document.querySelector('.nav-bar').classList;
        const harmburger = document.querySelector('.harmburger').classList;
        if(!navIsOpen) {
            nav.contains('nav-bar-nav-hide') ?
            nav.replace('nav-bar-nav-hide', 'nav-bar-nav-show') :
            nav.add('nav-bar-nav-show');
            harmburger.add('harmburger-open');
            setNavIsOpen(true);
        }else {
            nav.replace('nav-bar-nav-show', 'nav-bar-nav-hide');
            harmburger.remove('harmburger-open');
            setNavIsOpen(false);
        } 
    }
    

    return ( 
        <div className = 'nav-bar'>
            <div id = 'nav-bar-brand'>
                <h5>T-Best<span>Fashion</span></h5>
            </div>
            <div className = 'harmburger' onClick = {navClick} >
                <div className = 'harmburger-bar'></div>
            </div>
                <ul className = 'nav-bar-nav'>
                    <li className = 'nav-item'>
                        <NavLink to = '/' exact className = 'nav-link' activeClassName = "active-link"><i className = 'fa fa-home'></i> HOME</NavLink>
                    </li>
                    <li className = 'nav-item'>
                        <NavLink to = '/styles-gallery' className = 'nav-link' activeClassName = "active-link"><i className = 'fa fa-tshirt'></i> STYLES GALLERY</NavLink>
                    </li>
                    <li className = 'nav-item'>
                        <NavLink to = '/about' className = 'nav-link' activeClassName = "active-link"><i className = 'fa fa-info-circle'></i> ABOUT</NavLink>
                    </li>
                    <li className = 'nav-item'>
                        <NavLink to = '/contact'className = 'nav-link' activeClassName = "active-link"><i className = 'fa fa-phone'></i> CONTACT</NavLink>
                    </li>
                </ul> 
        </div>
     );
}
 
export default Navigation;
