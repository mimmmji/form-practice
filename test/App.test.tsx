
// @jest-environment jsdom

import React from "react";
import {fireEvent, render} from "@testing-library/react";
import SimpleForm from "../src/components/SimpleForm";
import TextField from "../src/components/TextField";
import { max, min, required } from "../src/utils/Validation";
import '@testing-library/jest-dom';

describe('SimpleForm', () => {
    it('should render TextField', () => {
        const { getByLabelText } = render(
            <SimpleForm>
                <TextField
                    source={'name'}
                    label={'name'}
                    id={'name'}
                />
            </SimpleForm>
        );
        const input = getByLabelText("name");
        expect(input).toBeInTheDocument();
    })


    it('should validate length of TextField', () => {
        const { getByLabelText } = render(
            <SimpleForm>
                <TextField
                    source={'name'}
                    label={'name'}
                    id={'name'}
                    validate={[min(5),max(10),required()]}
                />
            </SimpleForm>
        );
        const input = getByLabelText("name");
        fireEvent.change(input, { target: { value: '123' } });
        expect(input).toHaveAttribute('aria-invalid', 'true');
        fireEvent.change(input, { target: { value: '12345' } });
        expect(input).toHaveAttribute('aria-invalid', 'false');
        fireEvent.change(input, { target: { value: '12345123456' } });
        expect(input).toHaveAttribute('aria-invalid', 'true');
    })
});
