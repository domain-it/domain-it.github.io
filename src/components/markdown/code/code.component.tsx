import { FiCopy } from 'react-icons/fi';
import { ReactNode, useState } from 'react';
import { copyToClipboard } from '../../../utils/copyToClipboard.ts';
import './code.style.css';

interface CodeProps {
  children?: ReactNode;
}

export const Code = (props: CodeProps) => {
  const { children } = props;
  const [modal, setModal] = useState(false);

  const onCopy = (value: string) => {
    copyToClipboard(value).then(result => setModal(result));
    setTimeout(() => {
      setModal(false);
    }, 3000);
  };

  return (
    <code className={'code-insert'}
          onClick={() => onCopy(String(children).replace(/\n$/, ''))}>
      {String(children).replace(/\n$/, '')}
      <FiCopy className={'copy-button'} />

      <div key="copymodal" className={`modal ${!modal && 'hidden'}`}>
        Copied
        <FiCopy />
      </div>
    </code>
  );
};
