import { Link } from 'react-router-dom';
import { ReactNode } from 'react';
import './link.style.css';

interface MarkdownLinkProps {
  children?: ReactNode;
  href?: string;
}

export const MarkdownLink = (props: MarkdownLinkProps) => {
  const { children, href } = props;
  return (<Link className="link" to={href ? href : String(children)}>{children}</Link>);
};
