import { ChangeEvent } from 'react';
import './dropdown.style.css';

interface DropdownOptions {
  label: string;
  value: string;
}

interface DropdownProps {
  options: DropdownOptions[];
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  defaultValue: string | number | readonly string[] | undefined;
}

export const Dropdown = (props: DropdownProps) => {

  const { onChange, options, defaultValue } = props;

  return (
    <select className="dropdown" defaultValue={defaultValue} onChange={(event) => onChange(event)}>
      {options.map((option) => (<option key={option.value} value={option.value}>{option.label}</option>))}
    </select>
  );
};
