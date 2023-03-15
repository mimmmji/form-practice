import React, {FunctionComponent, useEffect} from 'react';
import {InputProps} from "../types/InputProps";
import useInput from "../hooks/useInput";

const TextField: FunctionComponent<InputProps> = ({source, label, placeholder, type, minLength, maxLength}) => {
    const validate = [];

    if (minLength !== undefined) {
      validate.push((value: string) => (value.length < minLength ? `Error! 최소 ${minLength}글자 이상이여야 합니다` : ''));
    }
  
    if (maxLength !== undefined) {
      validate.push((value: string) => (value.length > maxLength ? `Error! 최대 ${maxLength}글자 이하여야 합니다.` : ''));
    }
  
    const { value, onChange, error } = useInput({ source, validate });

        
    return (
        <div>
            <div style={{display: 'flex', gridGap: '8px'}}>
                <label htmlFor={source}>{label}</label>
                <input value={value} onChange={e => onChange(e.target.value)} name={source} type={type}
                       placeholder={placeholder}/>
            </div>
            {error !== '' && <div style={{ color: 'red' }}>{error}</div>}
        </div>
    );
};

export default TextField;
