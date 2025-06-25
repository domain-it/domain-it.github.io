import './table.style.css';

export const Table = ({ ...props }) => {
  return (
    <table className="table" {...props}>
      {props.children}
    </table>
  );
};
