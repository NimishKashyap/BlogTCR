import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "./css/footer.css";
function Footer() {
    return (
        <footer>
            <div className="footer__content">
                <li>
                    <span>&#169;</span>
                    <strong>Technocrats Robotics - 2021</strong>
                    
                </li>
                <div className="footer__links">
                    <li>
                        <a
                            href="https://www.instagram.com/technocratsrobotics/"
                            target="_blank"
                        >
                            <InstagramIcon />
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.facebook.com/technocratsrobotics"
                            target="_blank"
                        >
                            <FacebookIcon />
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.linkedin.com/company/technocrats-robotics-vit/"
                            target="_blank"
                        >
                            <LinkedInIcon />
                        </a>
                    </li>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
