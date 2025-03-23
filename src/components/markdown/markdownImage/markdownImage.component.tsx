import './markdownImage.style.css';

interface ImageProps {
  alt?: string;
  src?: string;
  title?: string;
}

export const MarkdownImage = (props: ImageProps) => {
  const { src, alt, title } = props;
  return (
    <div className="image">
      <img className="image-thumbnail" src={src} alt={alt} />
      {title && <span className="image-title">{title}</span>}
    </div>
  );
};
