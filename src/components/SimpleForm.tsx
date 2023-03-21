import {createContext, PropsWithChildren, useMemo, useState} from 'react';

export const FormContext = createContext({
    setValues: (v: any) => {},
    values: {} as Record<string, any>,
    errors: {} as Record<string, string>,
    setErrors: (e: any) => {}
})

const SimpleForm = ({children}: PropsWithChildren<{}>) => {
    const [values, setValues] = useState<Record<string, string>>({});
    const [errors, setErrors] = useState<Record<string, string>>({});
    const value = useMemo(() => ({setValues, values,errors, setErrors}), [setValues, values,errors, setErrors])


    
    const onClick = (e: any) => {
        e.preventDefault();
        const hasError = Object.values(errors).some(Boolean);
        if (!hasError) {
          alert(JSON.stringify(values));
        }
    }

    return (
        <FormContext.Provider value={value}>
            <form>
                {children}
                <button type={'submit'} onClick={onClick}>
                    제출
                </button>
            </form>
        </FormContext.Provider>
    );
};

export default SimpleForm;
