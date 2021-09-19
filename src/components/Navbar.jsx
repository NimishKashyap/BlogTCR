import React from "react";
import "./css/navbar.css";
import TcrLogo from "../media/TcrLogoClean.png";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <>
            <div className="navbar">
                <Link to="/">
                    <div className="navbar__logo">
                        <img src={TcrLogo} alt="TCR Logo" />
                        <h1>Techno Blog</h1>
                    </div>
                </Link>

                <div className="navbar__social">
                    <li>
                        <a
                            href="https://www.instagram.com/technocratsrobotics/"
                            target="_blank"
                        >
                            <InstagramIcon className="navbar__social__icons" />
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.facebook.com/technocratsrobotics"
                            target="_blank"
                        >
                            <FacebookIcon className="navbar__social__icons" />
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.linkedin.com/company/technocrats-robotics-vit/"
                            target="_blank"
                        >
                            <LinkedInIcon className="navbar__social__icons" />
                        </a>
                    </li>
                </div>
            </div>
        </>
    );
}

export default Navbar;
