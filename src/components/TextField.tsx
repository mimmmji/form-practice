import React, {FunctionComponent} from 'react';
import {InputProps} from "../types/InputProps";
import useInput from "../hooks/useInput";

const TextField: FunctionComponent<InputProps> = ({source, label, placeholder, type, validate}) => {
    const { value, onChange, error } = useInput({ source, validate });

    return (
        <div>
            <div style={{display: 'flex', gridGap: '8px'}}>
                <label htmlFor={source}>{label}</label>
                <input id={source} value={value} onChange={e => onChange(e.target.value)} name={source} type={type}
                       placeholder={placeholder} />
            </div>
            {error !== '' && <div data-testid={`error-message`} style={{ color: 'red' }}>{error}</div>}
        </div>
    );
};

export default TextField;
