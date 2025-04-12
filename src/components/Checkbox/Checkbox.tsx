import './checkBox.css'

export const Checkbox = ({ id, label, checked, name, onChange }: any) => {
    return (
      <div className="checkbox-wrapper">
        <input id={id} type="checkbox" checked={checked} name={name} onChange={onChange} />
        <label htmlFor={id}>{label}</label>
      </div>
    )
  }
  
 
  