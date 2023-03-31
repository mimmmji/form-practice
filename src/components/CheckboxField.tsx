import React, {FunctionComponent, useEffect, useState} from 'react';
import {InputProps} from "../types/InputProps";
import useInput from "../hooks/useInput";

const CheckboxField: FunctionComponent<InputProps> = ({source, label}) => {
    const {value, onChange} = useInput({source});

    const handleCheckboxChange = (e:any) =>{
        onChange(e.target.checked);
    }

    return (
        <div>
            <label htmlFor={source}>{label}</label>
            <input id={source} 
                    name={source} 
                    type={'checkbox'} 
                    checked={value} 
                    onChange={handleCheckboxChange} 
                    />
        </div>
    );
};

export default CheckboxField;
