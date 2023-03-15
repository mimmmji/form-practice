import {InputProps} from "../types/InputProps";
import React, {useCallback, useContext, useState} from "react";
import {FormContext} from "../components/SimpleForm";

interface UseInputProps extends Pick<InputProps, 'source'> {
    validate?: ((value:string) => string)[];
}

function useInput(props: UseInputProps) {
    const {setValues, values, setErrors, errors} = useContext(FormContext);

    const validate = useCallback(
        (value: string) => {
          if (props.validate) {
            for (const validator of props.validate) {
              const error = validator(value);
              if (error) {
                return error;
              }
            }
          }
          return undefined;
        },
        [props.validate]
      );

    const value = values[props.source] || '';

    const onChange = useCallback((v: string) => {
        setValues({
            ...values,
            [props.source]: v,
        });
        setErrors({
          ...errors,
          [props.source]: validate(v),
        });
    }, [props.source, validate, setValues,setErrors]);
        


    const error = errors[props.source];


    return {value, onChange, error};
}

export default useInput;
