import {InputProps} from "../types/InputProps";
import React, {useCallback, useContext, useEffect, useState} from "react";
import {FormContext} from "../components/SimpleForm";
import { validateInput, ValidationRule } from "../utils/Validation";

interface UseInputProps extends Pick<InputProps, 'source'> {
    validate?: ValidationRule[];
}

function useInput(props: UseInputProps) {
    const {setValues, values, setErrors, errors} = useContext(FormContext);

    const onChange = useCallback((v: string) => {
        setValues({
            ...values,
            [props.source]: v,
        });
        setErrors({
          ...errors,
          [props.source]: validateInput(v, props.validate ?? []),
        });
    }, [props.source, props.validate, setValues,setErrors, values, errors]);

    const error = errors[props.source];
    return {value: values[props.source], onChange, error};
}

export default useInput;
