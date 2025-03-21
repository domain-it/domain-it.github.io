import './footer.style.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

export const Footer = () => {

  return (
    <div className="footer">
      <div className="sign">Created by Dominik Boczkowski (MsAfro12)</div>
      <div className="about"><Link to={'/about-me'}>About me</Link></div>
      <div className="socials">
        <a target="_blank" href={'https://www.linkedin.com/in/dominik-boczkowski-429940357/'}><FaLinkedin /></a>
        <a target="_blank" href={'https://github.com/dboczkow'}><FaGithub /></a>
      </div>
    </div>
  );
};
