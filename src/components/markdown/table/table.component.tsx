import { ReactNode } from 'react';
import './table.style.css';

interface TableProps {
  children?: ReactNode;
}

export const Table = (props: TableProps) => {
  const { children } = props;

  return (
    <table className="table">
      {children}
    </table>
  );
};
