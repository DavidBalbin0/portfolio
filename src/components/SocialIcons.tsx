// @ts-ignore
import linkedinLogo from '../assets/linkedin.svg';
// @ts-ignore
import githubLogo from "../assets/github.svg";


export const SocialIcons = () => {
    return (
        <div className="social-icon">
            <a href="#"><img src={linkedinLogo} alt=""/></a>
            <a href="#"><img src={githubLogo} alt=""/></a>
        </div>
    )
}