import React, {FunctionComponent} from 'react';
import {InputProps} from "../types/InputProps";
import useInput from "../hooks/useInput";

const SelectboxField: FunctionComponent<InputProps> = ({source, label, options}) => {
    const { value, onChange } = useInput({ source });


    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        onChange(e.target.value);
      };

    return (
        <div>
            <div style={{display: 'flex', gridGap: '8px'}}>
                <label htmlFor={source}>{label}</label>
                <select id={source} name={source} value={value} onChange={handleSelectChange}>
                    {options && options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                    ))}
                </select>
            </div>
        </div>
    );
};

export default SelectboxField;
