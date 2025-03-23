import { FaQuoteRight } from 'react-icons/fa6';
import { ReactNode } from 'react';
import './blockquote.style.css';

interface BlockquoteProps {
  children?: ReactNode;
}

export const Blockquote = (props: BlockquoteProps) => {
  const { children } = props;

  return (
    <blockquote>
      <FaQuoteRight />
      {children}
    </blockquote>
  );
};
