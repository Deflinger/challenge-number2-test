import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'
import { useState } from 'react'
import { Checkbox } from '../Checkbox/Checkbox'


import passwordGif from '../../assets/gif/password.gif'
import copyIcon from '../../assets/icons/copy.svg'
import refreshIcon from '../../assets/icons/refresh.svg'

import './passGen.css'
import { generatePassword, getPasswordStrength, handleCopyPassword } from '../utils'

export const PassGen = () => {
    const [passwordLength, setPasswordLength] = useState<number>(10)
    const [password, setPassword] = useState('')
    const [useUpper, setUseUpper] = useState(true)
    const [useLower, setUseLower] = useState(false)
    const [useNumbers, setUseNumbers] = useState(false)
    const [useSymbols, setUseSymbols] = useState(false)
  
    const handleGeneratePassword = () => {
      const newPassword = generatePassword(
        passwordLength,
        useUpper,
        useLower,
        useNumbers,
        useSymbols
      );
      setPassword(newPassword);
    };
     
    const onChangePasswordLength = (value: number | number[]) => {
      setPasswordLength(Array.isArray(value) ? value[0] : value)
    }
  
    return (
      <div className="password-wrapper">
        <div className="gif">
          <img src={passwordGif} alt="Password Gif" />
        </div>

        <div className="tac">
          <h2 className="title">PASSWORD GENERATOR</h2>
          <p className="subtitle">
            Ensure online account safety by creating strong and secure passwords
          </p>
        </div>

        <div className="password-input-wrapper">
          <div className="password-field">
            <input 
                type="text" 
                placeholder="your password" 
                value={password} 
                readOnly
            />

            <img 
                src={refreshIcon} 
                alt="refresh the password"
                onClick={handleGeneratePassword}
                style={{ cursor: 'pointer' }} 
            />
          </div>
          
          <button className="copy-btn" onClick={() => handleCopyPassword(password)}>
            <img src={copyIcon} alt="copy password"  />
            Copy
          </button>
        </div>

        <span className="fw-500">
          {getPasswordStrength(password)}
        </span>

        <div className="slider">
          <div>
            <label id="slider-label">Password Length: </label>
            <span>{passwordLength}</span>
          </div>
          <Slider
            max={30}
            min={5}
            value={passwordLength}
            onChange={onChangePasswordLength}
            className="slider-style"
          />
        </div>
        
        <div className="elements">
          <Checkbox 
            id="uppercase" 
            label="Uppercase" 
            checked={useUpper} 
            name="upper" 
            onChange={() => setUseUpper(prev => !prev)}
          />
          <Checkbox 
            id="lowercase" 
            label="Lowercase" 
            checked={useLower} 
            name="lower"
            onChange={() => setUseLower(prev => !prev)}  
          />
          <Checkbox 
            id="numbers" 
            label="Numbers" 
            checked={useNumbers} 
            name="numbers" 
            onChange={() => setUseNumbers(prev => !prev)}
          />
          <Checkbox
            id="special chars"
            label="Special Characters"
            checked={useSymbols}
            name="specialChars"
            onChange={() => setUseSymbols(prev => !prev)}
          />
        </div>
      </div>
    )
  }