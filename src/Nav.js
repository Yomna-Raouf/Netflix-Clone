import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';

function Nav() {

    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener( "scroll", ()=> {
            if (window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);
        });

        return () => {
           // window.removeEventListener("scroll");
        }

    }, []);

    return (
        <div className={` nav ${show && "nav__black"}`}>
            <img
                className="nav__logo"
                src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
                alt = "Netflix logo"
            />

            <NavLink to="/genres" className="nav__signin__btn">Sign In</NavLink>
            <NavLink to="/SignUp" className="nav__signup__btn">Sign Up</NavLink>


           {/*<img
                className="nav__avatar"
                src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
                alt = "Netflix logo"
            /> */}

            
            
        </div>
    )
}

export default Nav;
