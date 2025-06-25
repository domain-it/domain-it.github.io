import Image from 'next/image';
import './images.style.css';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

export const Images = (props: {
  src: string | StaticImport;
  alt: string;
  className?: string;
}) => {
  return (
    <Image
      className="markdown-image"
      src={props.src}
      alt={props.alt}
      width={0}
      height={0}
      sizes="100vw"
    />
  );
};
