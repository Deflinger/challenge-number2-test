import './CheckBox.css'

interface CheckboxProps {
  id: string;
  label: string;
  checked: boolean;
  name: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Checkbox = ({ id, label, checked, name, onChange }: CheckboxProps) => {
    return (
      <div className="checkbox-wrapper">
        <input id={id} 
               type="checkbox" 
               checked={checked} 
               name={name} 
               onChange={onChange} 
        />
        <label htmlFor={id}>{label}</label>
      </div>
    )
  }
  
 
  