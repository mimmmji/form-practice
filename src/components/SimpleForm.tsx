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
        const errorCount = Object.keys(errors).filter(key => errors[key]).length;
        if (errorCount === 0) {
            alert(JSON.stringify(values));
        } else {
            alert(`제출할 수 없습니다. ${errorCount}개의 에러를 확인해주세요.`);
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
