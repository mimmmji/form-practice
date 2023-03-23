import {HTMLInputTypeAttribute} from "react";


export interface InputProps {
    id: string;
    source: string;
    label: string;
    placeholder?: string;
    type?: HTMLInputTypeAttribute;
    error?: string;
    minLength?: number;
    maxLength?: number;

    validate?: ((value:string) => string)[];
 
}


