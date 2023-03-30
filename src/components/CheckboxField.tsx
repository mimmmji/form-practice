import React, {FunctionComponent} from 'react';
import {InputProps} from "../types/InputProps";
import useInput from "../hooks/useInput";

const CheckboxField: FunctionComponent<InputProps> = ({source, label}) => {
    const {value, onChange, error} = useInput({source});

    return (
        <div>
            <label htmlFor={source}>{label}</label>
            <input id={source} name={source} type={'checkbox'}/>
        </div>
    );
};

export default CheckboxField;
