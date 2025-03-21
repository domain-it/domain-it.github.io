import "./switch.style.css"

interface SwitchProps {
  value?: string
  disabled?: boolean
  onChange?: () => void
  checked?: boolean;
}

export const Switch = ({value, disabled, onChange, checked}: SwitchProps) => {
  return (
    <label className="switch">
      <input type={"checkbox"} value={value} disabled={disabled} onChange={onChange} checked={checked}/>
      <span className="slider"></span>
    </label>
  )
}
