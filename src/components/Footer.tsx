import {SocialIcons} from "./SocialIcons";
// @ts-ignore
import logo from "../assets/logo.svg";
export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="logo-container">
                    <img src={logo} alt="Logo"/>
                </div>
                <div className="copyright">
                    <SocialIcons />
                    <p>© 2024 - David Balbino</p>
                </div>
            </div>
        </footer>
    );
}