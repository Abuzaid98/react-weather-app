import React from 'react'
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faGithub, faInstagram, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
        <div>
            <footer className="text-center text-white">
                <div className='socialIcon'>
                    <div className="icon">
                        <FontAwesomeIcon icon={faEnvelope} />
                    </div>
                    <div className="icon">
                        <FontAwesomeIcon icon={faFacebook} />
                    </div>
                    <div className="icon">
                        <FontAwesomeIcon icon={faInstagram} />
                    </div>
                    <div className="icon">
                        <FontAwesomeIcon icon={faWhatsapp} />
                    </div>
                    <div className="icon">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </div>
                    <div className="icon">
                        <FontAwesomeIcon icon={faGithub} />
                    </div>
                </div>

                <div className="text-center p-3 fs-5">
                    © 2020 Copyright:
                    <a className="text-white" href="#"> zaid.com</a>
                </div>
            </footer>
        </div>
    )
}

export default Footer;