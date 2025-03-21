import './card.style.css';
import { FaClock, FaTag } from 'react-icons/fa6';
import { GiSBrick } from 'react-icons/gi';

interface CardProps {
  imageUrl: string;
  onClick?: () => void;
  title: string;
  subtitle?: string;
  description?: string;
  time: string;
}

export const Card = (props: CardProps) => {
  const { imageUrl, time, description, onClick, subtitle, title } = props;
  return (
    <div className="card">
      <div className="image">
        <img src={imageUrl} alt={'Construction Site'} />
        <div className="tags"><FaTag />WiP</div>
        <div className="button" onClick={onClick}><GiSBrick /></div>
      </div>
      <div className="text">
        <h2 className="title">{title}</h2>
        <h3 className="subtitle">{subtitle}</h3>
        <p className="description">{description} </p>
        <small className="time"><FaClock /> {time} </small>
      </div>
    </div>
  );
};
