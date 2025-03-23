import { ReactNode } from 'react';
import './TableOfContent.style.css';
import { FaScroll } from 'react-icons/fa';

interface MarkdownToCProps {
  children?: ReactNode;
  className?: string;
}

export const MarkdownToC = (props: MarkdownToCProps) => {
  const { children } = props;
  return (
    <div className="article-toc">
      <h3 className="article-toc-header">Table of Content <FaScroll /></h3>
      <nav>{children}</nav>
    </div>
  );
};
