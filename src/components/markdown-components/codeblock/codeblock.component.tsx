'use client';
import { MouseEvent, ReactNode } from 'react';
import './codeblock.style.css';
import { FaClipboard } from 'react-icons/fa6';

interface CodeBlockProps {
  children?: ReactNode;
}

export const CodeBlock = ({ children }: CodeBlockProps) => {
  const copyOnClick = (
    event: MouseEvent<HTMLSpanElement, globalThis.MouseEvent>
  ) => {
    const { textContent } = event.target as HTMLElement;

    if (textContent) {
      navigator.clipboard.writeText(textContent).then();
    }
  };

  return (
    <span className="code-block" onClick={event => copyOnClick(event)}>
      <FaClipboard className="clipboard" size="12" />
      <code>{children}</code>
    </span>
  );
};
