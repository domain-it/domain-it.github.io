import './about-me.style.css';
import { BiLeftArrowAlt } from 'react-icons/bi';
import { FaHand } from 'react-icons/fa6';

export const AboutMePage = () => {
  return (
    <div className="about-me">
      <img className={'profile-picture'}
           src={'/article/dog.jpg'} alt={'dog'} />
      <div className="center">
        <h1 className="title">Hi! <FaHand /></h1>
        <p className="description">
          This page is under construction too. In the meantime look at this dog!!!
        </p>
        <BiLeftArrowAlt style={{ fontSize: '100px' }} />
      </div>
    </div>
  );
};
