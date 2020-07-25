import React from 'react';
import {Link} from 'react-router-dom';
import './SignUp.css';


function SignUp() {
    return (
        <div className="SignUp">
            <header className="SignUp__Header">
                <Link to="/genres">
                    <img
                        className="SignUp__logo"
                        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
                        alt = "Netflix logo"
                    />
                </Link>
            </header>
            
            <div className="SignUp__body">
                <div className="SignUp__form__container">

                </div>
            </div>
           
        </div>
    )
}

export default SignUp
