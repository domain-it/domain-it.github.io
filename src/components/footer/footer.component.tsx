import './footer.style.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import Link from 'next/link';

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-left">
        <Link href={'/about-me'}>about_me</Link>
      </div>
      <div className="footer-center">
        Dominik &#39;Afro&#39; Boczkowski
        <br />
        created using Next.js © {new Date().getFullYear()}
      </div>
      <div className="footer-right">
        <span className="footer-link-title">Find me here:</span>
        <Link href="/">
          <FaLinkedin />
        </Link>
        <Link href="/">
          <FaGithub />
        </Link>
      </div>
    </div>
  );
};
