import { isValidElement, ReactNode, useState } from 'react';
import Prism from 'react-syntax-highlighter';
import { copyToClipboard } from '../../../utils/copyToClipboard.ts';
import { FiCopy } from 'react-icons/fi';
import { JSX } from 'react/jsx-runtime';
import './codeblock.style.css';

interface CodeBlockProps {
  children?: ReactNode;
}

export const CodeBlock = (props: CodeBlockProps): JSX.Element | undefined => {
  const { children } = props;

  const [modal, setModal] = useState(false);

  const onCopy = (value: string) => {
    copyToClipboard(value).then(result => setModal(result));
    setTimeout(() => {
      setModal(false);
    }, 3000);
  };

  if (isValidElement<{ className?: string; children?: ReactNode }>(children)) {
    const childrenProps = children.props;
    return (
      <div className={'code-block'}>
        <Prism
          children={String(childrenProps.children)}
          PreTag="div"
          language={(childrenProps.className ?? '').replace(/^language-/i, '')}
          useInlineStyles={false}
          onClick={() => onCopy(String(childrenProps.children).replace(/\n$/, ''))}
        />
        <FiCopy className={'copy-button'} />
        <div key="codeblock-modal" className={`modal ${!modal && 'hidden'}`}>
          Copied
          <FiCopy />
        </div>
      </div>
    );
  }
  return undefined;
};
