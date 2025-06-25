import { MdFormatQuote } from 'react-icons/md';
import { ReactNode } from 'react';
import './blockquotes.style.css';

interface BlockquoteProps {
  children?: ReactNode;
}

export const Blockquotes = (props: BlockquoteProps) => {
  const { children } = props;
  return (
    <div className="blockquote">
      <MdFormatQuote size={32} className="blockquote-icon" />
      {children}
    </div>
  );
};
