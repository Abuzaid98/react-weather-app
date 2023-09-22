import React from 'react'

import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocation, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { Link, useNavigate } from 'react-router-dom'

import {
    GoogleAuthProvider,
    getAuth,
    signInWithPopup,
    signOut,
} from "firebase/auth";
import firbase from "../Firbase";


const Header = ({ username, userimage }) => {
    // console.log(username)
    // console.log(userimage)
    const navigate = useNavigate()


    const handleSignOut = () => {
        const auth = getAuth();
        signOut(auth)
            .then(() => {
                // Sign-out successful.
                console.log("from sign out");
                navigate('/')
            })
            .catch((error) => {
                // An error happened.
            });
    };



    return (
        <>
            <header>
                <div className="container">
                    <div className="header">
                        <div className="left">
{/*                             <Link to='/recentCity'> */}
                                <h1 >Weather App</h1>
{/*                             </Link> */}
                            <Link to='/CurrentWeather'>
                                <p> <FontAwesomeIcon icon={faLocation} /> Current Location </p>
                            </Link>
                        </div>
                        <div className="right d-flex align-items-center justify-content-between">
                            <h1 className='mt-2 name'>
                                <img style={{ borderRadius: '50%', margin: '0 10px' }} src={userimage} alt={username} width={50} />{username}
                            </h1>
                            <p >
                                <FontAwesomeIcon icon={faRightFromBracket} onClick={handleSignOut} />
                            </p>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
