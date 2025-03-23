import { ReactNode } from 'react';

interface MarkdownHeadersProps {
  children?: ReactNode;
}

export const MarkdownHeaders = (props: MarkdownHeadersProps) => {
  const { children } = props;
  return (
    <hgroup id={`#${children}`}>{children}</hgroup>
  );
};
