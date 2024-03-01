// @ts-ignore
import linkedinLogo from '../assets/linkedin.svg';
// @ts-ignore
import githubLogo from "../assets/github.svg";


export const SocialIcons = () => {
    return (
        <div className="social-icon">
            <a href="https://www.linkedin.com/in/david-balbino/" target="_blank"><img src={linkedinLogo} alt=""/></a>
            <a href="https://github.com/DavidBalbin0" target="_blank"><img src={githubLogo} alt=""/></a>
        </div>
    )
}